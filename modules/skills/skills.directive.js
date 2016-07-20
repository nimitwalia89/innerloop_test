(function ()
{
    'use strict';

    angular
        .module('helpDesk.skills')
        .directive('skills', skillsDirective);

    /** @ngInject */
    function skillsDirective($http, $rootScope)
    {
    return {
        templateUrl: 'modules/skills/skills.directive.html',
        restrict: 'E',
        scope: {
            selectedSkills: '=ngModel',
            skills: '=skillsList'
        }, 
        link: function(scope){
            scope.selectedItem = null;
            scope.searchText = null;
            scope.querySearch = querySearch;
            scope.transformChip = transformChip;
            scope.numberBuffer = '';
            scope.autocompleteDemoRequireMatch = true;
            
            scope.updateSkills = function(){
                console.log(scope.selectedSkills);
                scope.selectedSkills[scope.selectedSkills.length-1].$$hashKey = 'object:'+scope.selectedSkills.length;
                localStorage.setItem('skills', JSON.stringify(scope.selectedSkills));
            }

            function transformChip(chip) {
              // If it is an object, it's already a known chip
              if (angular.isObject(chip)) {
                return chip;
              }
              // Otherwise, create a new one
              return { name: chip, type: 'new' }
            }
            

            function querySearch (query) {
              var results = query ? scope.skills.filter(createFilterFor(query)) : [];
              return results;
            }

            function createFilterFor(query) {
              var lowercaseQuery = angular.lowercase(query);
              return function filterFn(skill) {
                return (skill._lowername.indexOf(lowercaseQuery) === 0) ||
                    (skill._lowertype.indexOf(lowercaseQuery) === 0);
              };
            }
        }
    }
    }
})();
