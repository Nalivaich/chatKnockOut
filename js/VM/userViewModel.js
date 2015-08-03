/**
 * Created by vitali.nalivaika on 30.07.2015.
 */

define(["../jquery", "../knockout-3.3.0", "../services/userService"],function($, ko, userService) {
        function UserViewModel(data) {
            'use strict';

            var self = this;

            self.id = ko.observable(data.id || 0);
            self.name = ko.observable(data.name || '');
            self.lastName = ko.observable(data.lastName || '');
            self.password = ko.observable(data.password || '1111');
            self.userRooms = ko.observableArray([ ]);
            self.external = ko.observable(data.external || '');


            self.fullName = ko.computed(function() {
                return (self.name() + " " + self.lastName());
            });

            self.add = function(userObject,onSuccess, onError) {
                return(userService.add(function () {
                    doSmth();
                    onSuccess();
                }, onError , userObject))
            };

            self.addUserRoom = function(userObject,onSuccess, onError) {
                return(userService.addUserRoom(function () {
                    doSmth();
                    onSuccess();
                }, onError , userObject))
            };

            function doSmth () {

            }

        }


        return UserViewModel;
    }
);

