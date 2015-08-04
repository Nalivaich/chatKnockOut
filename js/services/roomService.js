/**
 * Created by vitali.nalivaika on 31.07.2015.
 */


define(["../jquery", "VM/roomViewModel"],function($,  RoomViewModel ){
            'use strict';

            var self = {};
            self.roomsRepository = [];
            self.add = function(odject, onSuccess, onError) {
                window.setTimeout(
                    function() {
                        onSuccess();
                    }, Math.random() * 1000 + 1000);
            };


            self.remove = function(odject, onSuccess, onError) {
                window.setTimeout(
                    function() {
                        onSuccess();
                    }, Math.random() * 1000 + 1000);
            };


            self.addUserInRoom = function(odject,onSuccess, onError) {
                window.setTimeout(
                    function() {
                        onSuccess();
                    }, Math.random() * 1000 + 1000);
            };

            self.getAll = function(onSuccess, onError) {
                window.setTimeout(
                    function() {
                        onSuccess();

                    }, Math.random() * 1000 + 1000);
                return self.roomsRepository;
            };

            self.addMessage = function(object, onSuccess, onError) {
                window.setTimeout(
                    function() {
                        onSuccess();

                    }, Math.random() * 1000 + 1000);
                return self.roomsRepository;
            };



        var privateFlag = [
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false,
            true,
            false
        ];

        var roomNames = [
            'My Best Room',
            'Only men)',
            'bookworms',
            'Gough died',
            'hitch-hiking',
            'fishing',
            'hunting',
            'fishing & hunting',
            'like a boss now',
            'news'
        ];


        self.generateRooms = function(createrId) {
            var name, idCreater;
            var newArray = [];
            newArray.push({userIndex: giveMeRandomValue(0,5)});
            var randomValue = giveMeRandomValue(0,9);
            name = roomNames[randomValue];
            idCreater = createrId || giveMeRandomValue(0,5);
            var newRoom = new RoomViewModel({
                name: name,
                createrId: idCreater,
                id: self.roomsRepository.length,
                usersIDInRoom: newArray,
                privateFlag: privateFlag[giveMeRandomValue(0,9)]
            });
            return newRoom;

        };

        self.pushGeneratedRoom = function(createrId) {
            for(var i = 0; i < 5; i++) {
                var newRoomObject = self.generateRooms(i);
                self.roomsRepository.push(newRoomObject);
            }
        }();

        function giveMeRandomValue(min , max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }


        return self;
    }
);



