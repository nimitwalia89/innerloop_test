(function ()
{
    'use strict';

    angular
        .module('helpDesk.menu')
        .controller('MenuController', MenuController);

    /** @ngInject */
    function MenuController($rootScope, $scope, $mdDialog, $mdToast, $state, $mdSidenav)
    {
        var vm = this;
        vm.logging_in = false;

        vm.toggleSideNav = function(){
            $mdSidenav('left').toggle();
        }

        $scope.$on('toggle', function(){
            vm.toggleSideNav();
        })

        $rootScope.globals = {};
        vm.logout = function(){
                $rootScope.globals = {};
                $rootScope.globalData = {};
                localStorage.removeItem('userData');
                $state.go('login');
        }
    }
})();