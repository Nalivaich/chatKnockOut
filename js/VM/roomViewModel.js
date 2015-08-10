/**
 * Created by vitali.nalivaika on 30.07.2015.
 */

define(["../jquery", "../knockout-3.3.0"],function($, ko) {
        function RoomViewModel(data) {
            'use strict';
            var self = this;

            data = $.extend({
                id: '',
                createrId: 0,
                name: '',
                privateFlag: false,
                usersIDInRoom: [],
                external: ''
            }, data);


            self.id = ko.observable( data.id );
            self.createrId = ko.observable(data.createrId );
            self.name = ko.observable(data.name );
            self.privateFlag = ko.observable(data.privateFlag );
            self.usersIDInRoom = ko.observableArray(data.usersIDInRoom.map(function (currentvalue) {
                return {
                    userIndex: ko.observable(currentvalue.userIndex)
                };
            }));
            self.messagesHistory = ko.observableArray(data.usersIDInRoom.map(function (currentvalue) {
                return {
                    message: ko.observable(currentvalue.message),
                    userId: ko.observable(currentvalue.userId)
                };
            }));
            self.external = ko.observable(data.external );

        }
        return RoomViewModel;
    }
);

