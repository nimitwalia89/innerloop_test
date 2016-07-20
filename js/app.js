define([], function () {

var app = angular
  .module('helpDesk', [
    'ngMaterial',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'oc.lazyLoad',
  ]);
  app.config(config);
  app.run(run);

angular.module('helpDesk.login', []);
angular.module('helpDesk.dashboard', []);
angular.module('helpDesk.menu', []);
angular.module('helpDesk.skills', []);
    /** @ngInject */
    function config($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, $mdThemingProvider)
    {
      $mdThemingProvider.theme('default');

      $ocLazyLoadProvider.config({
      loadedModules: ['helpDesk'],
        //debug: true,
        events: false
      });
      $stateProvider
        .state('login', {
          url    : '/login',
          templateUrl: 'modules/login/login.html',
          resolve: {
            load: function($ocLazyLoad) {
              return $ocLazyLoad.load ({
                name: 'helpDesk.login',
                files: ['modules/login/login.controller.js', 'modules/login/login.service.js']
              });
            }
          }
        })
        
        .state('app', {
          templateUrl: 'modules/main/menu.html',
          abstract: true,
          resolve: {

            load: function($ocLazyLoad) {
              return $ocLazyLoad.load ({
                name: 'helpDesk.menu',
                files: ['modules/main/menu.controller.js']
              });

            }
          }
          
        })
        .state('app.dashboard', {
          url    : '/dashboard',
          views:{
            'dashboard' : {
              templateUrl: 'modules/dashboard/dashboard.html',
            }
          },
          resolve: {

            load: function($ocLazyLoad) {
              return $ocLazyLoad.load ({
                name: 'helpDesk.dashboard',
                files: ['modules/dashboard/dashboard.controller.js']
              });

            }
          }
        })
        .state('app.skills', {
          url    : '/skills',
          views:{
            'dashboard' : {
              templateUrl: 'modules/skills/skills.html',
            }
          },
          resolve: {
            load: function($ocLazyLoad) {
              return $ocLazyLoad.load ({
                name: 'helpDesk.skills',
                files: ['modules/skills/skills.controller.js', 'modules/skills/skills.service.js', 'modules/skills/skills.directive.js']
              });
            }
          }
        })

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/login');
    }

    function run($rootScope, $timeout, $state){
      $rootScope.not_allowed = false;
      $rootScope.sampleCred = {email: 'kristie@innerloop.com', password: '123456', username: 'Kristie'};
        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams)
        {
          $rootScope.$broadcast('toggle');
            //if($rootScope.globals===undefined){
                $rootScope.globals = {};
                $rootScope.globalData = JSON.parse(localStorage.getItem('userData')) || {};
                $rootScope.globals.user_data = JSON.parse(localStorage.getItem('userData')) || {};
                if($rootScope.globals.user_data.email==undefined && toState.name!=='login'){
                  event.preventDefault();
                  $state.go('login');
                }
                
        });
    }

    app.bootstrap = function () {
      angular.bootstrap(document, ['helpDesk']);
    }
    return app;
});