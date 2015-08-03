/**
 * Created by vitali.nalivaika on 30.07.2015.
 */


define(["../jquery", "../knockout-3.3.0", "services/roomService"],function($, ko, roomService) {
        function RoomsViewModel(data) {
            'use strict';

            var self = this;

            self.id = ko.observable( data.id || '');
            self.createrId = ko.observable(data.createrId || 0);
            self.name = ko.observable(data.name || '');
            self.privateFlag = ko.observable(data.privateFlag || false);
            self.usersIDInRoom = ko.observableArray(data.usersIDInRoom || []);
            self.messagesHistory = ko.observableArray([]);
            self.external = ko.observable(data.external || '');



            self.add = function(userObject,onSuccess, onError) {
                return(roomService.add(function () {
                    onSuccess();
                }, onError , userObject))
            };

            self.remove = function(userObject,onSuccess, onError) {
                return(roomService.remove(function () {
                    onSuccess();
                }, onError , userObject))
            };

            self.addUserInRoom = function(userObject,onSuccess, onError) {
                return(roomService.remove(function () {
                    onSuccess();
                }, onError , userObject))
            };





        }
        return RoomsViewModel;
    }
);

