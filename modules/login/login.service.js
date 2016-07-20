(function ()
{
    'use strict';

    angular
        .module('helpDesk.login')
        .factory('LoginService', LoginService);

    /** @ngInject */
    function LoginService($http, $rootScope)
    {
    return {
      Userlogin: function (email, password, callback){
          var respsonse;
          console.log(email+' '+$rootScope.sampleCred.email);
          if(email==$rootScope.sampleCred.email && password==$rootScope.sampleCred.password){
            respsonse = {'success': true, email: email};
          }else{
            respsonse = {'success': false};
          }
        callback(respsonse);
        }
    }
    }
})();