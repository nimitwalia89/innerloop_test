(function ()
{
    'use strict';

    angular
        .module('helpDesk.dashboard')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($rootScope, $state)
    {
        /*if($rootScope.not_allowed == true){
            $state.go('login');
        }*/
        var vm = this;
        // Data
        vm.text = 'Dashboard';
        // Methods

        //////////
    }
})();
