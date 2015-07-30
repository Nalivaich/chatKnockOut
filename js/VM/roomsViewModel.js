/**
 * Created by vitali.nalivaika on 30.07.2015.
 */


define(["jquery", "knockout-3.3.0"],function($, ko) {
        function RoomsViewModel() {
            'use strict';

            var self = this;

            self.id = ko.observable(0);
            self.createrId = ko.observable(0);
            self.name = ko.observable('');
            self.privateFlag = ko.observable(false);
            self.usersIDInRoom = ko.observable([]);
            self.messagesHistory = ko.observable([]);
            self.external = ko.observable('');

            self.roomsConstructor = function() {
                this.id = 0;
                this.createrId = 0;
                this.name = '';
                this.privateFlag = false;
                this.usersIDInRoom = [];
                this.messagesHistory = [];
                this.external = '';

            };

        }
        return new RoomsViewModel();
    }
);


