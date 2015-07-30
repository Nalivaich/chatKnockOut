/**
 * Created by vitali.nalivaika on 30.07.2015.
 */

define(["jquery", "knockout-3.3.0"],function($, ko, userService) {
        function UsersViewModel() {
            'use strict';

            var self = this;

            self.id = ko.observable(0);
            self.name = ko.observable('');
            self.lastName = ko.observable('');
            self.password = ko.observable('');
            self.external = ko.observable('');


            self.fullName = ko.computed(function() {
                return (self.name() + " " + self.lastName());
            }, UsersViewModel);

            self.UserConstructor = function () {
                this.id = 0;
                this.name = '';
                this.lastName = '';
                this.external = '';
                this.password = ko.observable('');
                return this;
            };

            /*self.add = function(){
                userService.addUser(...);
            };
*/
        }
        return new UsersViewModel();
    }
);

