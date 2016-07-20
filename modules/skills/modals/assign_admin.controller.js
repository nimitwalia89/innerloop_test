(function ()
{
    'use strict';

    angular.module('helpDesk.skills')
        .controller('AssignAdminDialogController', AssignAdminDialogController);

    /** @ngInject */
    function AssignAdminDialogController($mdDialog, event, UserTicketsService, $mdToast)
    {
        var vm = this;

        // Data
        vm.saveDialog = saveDialog;
        vm.closeDialog = closeDialog;

        UserTicketsService.getAllStaff(function(data, status){
            console.log(data);
            if(data.success==true){
                vm.staff_members = data.data;
            }else{
                $mdToast.show($mdToast.simple().textContent('No data found!').position('top right'));
            }
        });

        function saveDialog(){
            $mdDialog.hide(vm.selected_admin);   
        }

        function closeDialog()
        {
            $mdDialog.cancel();
        }

    }
})();
