(function ()
{
    'use strict';

    angular
        .module('helpDesk.skills')
        .controller('skillsController', skillsController);

    /** @ngInject */
    function skillsController($scope, $rootScope, $mdDialog, $document, $filter, $mdToast)
    {
        var vm = this;
        vm.readonly = false;
    vm.selectedItem = null;
    vm.searchText = null;
    vm.skills = loadSkills();
    vm.selectedSkills =  localStorage.getItem('skills')!==null ?  JSON.parse(localStorage.getItem('skills')) : [];
    console.log(vm.selectedSkills);
    vm.numberBuffer = '';
    vm.autocompleteDemoRequireMatch = true;

    
    function loadSkills() {
      var skills = [
        {
          'name': 'Angular Js',
          'type': 'Front end'
        },
        {
          'name': 'Node Js',
          'type': 'Backend'
        },
        {
          'name': 'HTML',
          'type': 'Front end'
        },
        {
          'name': 'CSS',
          'type': 'Front end'
        },
        {
          'name': 'Mysql',
          'type': 'Backend'
        },
        {
          'name': 'Java',
          'type': 'Back end'
        },
        {
          'name': 'Android',
          'type': 'Application'
        },
        {
          'name': 'IOS',
          'type': 'Application'
        },
        {
          'name': 'Angular material',
          'type': 'Front end'
        },
        {
          'name': 'SASS',
          'type': 'Front end'
        },
        {
          'name': 'Meteor',
          'type': 'Framework'
        },
        {
          'name': 'React',
          'type': 'Front end'
        },
        {
          'name': 'Loopback',
          'type': 'Backend'
        }
      ];
      return skills.map(function (skill) {
        skill._lowername = skill.name.toLowerCase();
        skill._lowertype = skill.type.toLowerCase();
        return skill;
      });
    }


    }
})();
