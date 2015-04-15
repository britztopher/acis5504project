(function () {

  'use strict';

  angular.module('common.directives')
    .run(['$templateCache', function ($templateCache) {
      $templateCache.put('partials/menu-toggle.tmpl.html',
        '<md-button class="md-button-toggle"\n' +
        '  ng-click="toggle()"\n' +
        '  aria-controls="docs-menu-{{section.name | nospace}}"\n' +
        '  flex layout="row"\n' +
        '  aria-expanded="{{isOpen()}}">\n' +
        '  {{section.name}}\n' +
        '  <span aria-hidden="true" class="fa fa-chevron-down md-toggle-icon"\n' +
        '  ng-class="{\'toggled\' : isOpen()}"></span>\n' +
        '  <span class="visually-hidden">\n' +
        '    Toggle {{isOpen()? \'expanded\' : \'collapsed\'}}\n' +
        '  </span>\n' +
        '</md-button>\n' +
        '<ul ng-show="isOpen()" id="docs-menu-{{section.name | nospace}}" class="menu-toggle-list">\n' +
        '  <li ng-repeat="page in section.pages">\n' +
        '    <menu-link section="page"></menu-link>\n' +
        '  </li>\n' +
        '</ul>\n' +
        '');
    }])
    .run(['$templateCache', function ($templateCache) {
      $templateCache.put('partials/menu-link.tmpl.html',
        '<md-button ng-class="{\'{{section.icon}}\' : true}" ui-sref-active="active" \n' +
        '  ui-sref="{{section.state}}" ng-click="focusSection()">\n' +
        '  {{section | humanizeDoc}}\n' +
        '  <span  class="visually-hidden "\n' +
        '    ng-if="isSelected()">\n' +
        '    current page\n' +
        '  </span>\n' +
        '</md-button>\n' +
        '');
    }])
    .directive('menuLink', function () {
      return {
        scope: {
          section: '='
        },
        templateUrl: 'partials/menu-link.tmpl.html',
        link: function ($scope, $element) {
          var controller = $element.parent().controller();

          $scope.focusSection = function () {
            // set flag to be used later when
            // $locationChangeSuccess calls openPage()
            controller.autoFocusContent = true;
          };
        }
      };
    })
    .directive('menuToggle', function () {
      return {
        scope: {
          section: '='
        },
        templateUrl: 'partials/menu-toggle.tmpl.html',
        link: function (scope, element) {
          var controller = element.parent().controller();

          scope.isOpen = function () {
            return controller.isOpen(scope.section);
          };
          scope.toggle = function () {
            controller.toggleOpen(scope.section);
          };

          var parentNode = element[0].parentNode.parentNode.parentNode;
          if (parentNode.classList.contains('parent-list-item')) {
            var heading = parentNode.querySelector('h2');
            element[0].firstChild.setAttribute('aria-describedby', heading.id);
          }
        }
      };
    })
    .factory('menu', [
      '$location',
      '$rootScope',
      function ($location) {

        var sections = [{
          name: 'Getting Started',
          state: 'retirement.category({category: \'GettingStarted\'})',
          type: 'link'
        }];

        sections.push({
          name: 'Tools',
          type: 'toggle',
          pages: [{
            name: 'Find Tools in Shop',
            type: 'link',
            state: 'home.findtools',
            icon: 'fa fa-group'
          }, {
            name: 'Tool List',
            state: 'home.toollist',
            type: 'link',
            icon: 'fa fa-map-marker'
          },
            {
              name: 'Add Tool',
              state: 'home.createTool',
              type: 'link',
              icon: 'fa fa-spinner'
            }]
        });

        sections.push({
          name: 'Wood',
          type: 'toggle',
          pages: [{
            name: 'Find Wood in Shop',
            type: 'link',
            state: 'home.findwood',
            icon: 'fa fa-group'
          }, {
            name: 'Wood List',
            state: 'home.woodlist',
            type: 'link',
            icon: 'fa fa-map-marker'
          }
            //  {
            //  name: 'Add Tool',
            //  state: 'home.createTool',
            //  type: 'link',
            //  icon: 'fa fa-spinner'
            //}
          ]
        });

        sections.push({
          name: 'Reports',
          type: 'toggle',
          pages: [{
            name: 'Find All Report',
            type: 'link',
            state: 'home.findallreport',
            icon: 'fa fa-group'
          }, {
            name: 'Wood List',
            state: 'home.woodlist',
            type: 'link',
            icon: 'fa fa-map-marker'
          }
            //  {
            //  name: 'Add Tool',
            //  state: 'home.createTool',
            //  type: 'link',
            //  icon: 'fa fa-spinner'
            //}
          ]
        });
        var self;

        return self = {
          sections: sections,

          toggleSelectSection: function (section) {
            self.openedSection = (self.openedSection === section ? null : section);
          },
          isSectionSelected: function (section) {
            return self.openedSection === section;
          },

          selectPage: function (section, page) {
            page && page.url && $location.path(page.url);
            self.currentSection = section;
            self.currentPage = page;
          }
        };

        function sortByHumanName(a, b) {
          return (a.humanName < b.humanName) ? -1 :
            (a.humanName > b.humanName) ? 1 : 0;
        }

      }])
    .filter('nospace', function () {
      return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
      };
    })
    .filter('monthly', function () {
      return function (value) {
        return value / 12;
      };

    })
    .filter('humanizeDoc', function () {
      return function (doc) {
        if (!doc) return;
        if (doc.type === 'directive') {
          return doc.name.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }
        return doc.label || doc.name;
      };
    });

})();