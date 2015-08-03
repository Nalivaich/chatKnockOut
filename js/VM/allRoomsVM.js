/**
 * Created by vitali.nalivaika on 31.07.2015.
 */

define(["../jquery", "../knockout-3.3.0", "VM/roomViewModel", "../services/roomService"],function($, ko, RoomViewModel, roomService) {
        function RoomsViewModel() {
            'use strict';

            var self = this;

            self.roomsRepository = ko.observableArray([]);

            self.add = function(name, createrID, privateFlag, nextfunction) {
                var newRoomObject = new RoomViewModel({
                    name: name,
                    createrId: createrID,
                    id: self.roomsRepository().length,
                    privateFlag: privateFlag
                });

                newRoomObject.usersIDInRoom.push({userIndex: ko.observable(createrID)});
                newRoomObject.add(newRoomObject, function () {
                    self.roomsRepository.push(newRoomObject);
                    nextfunction();
                    return true;
                }, function () {

                });

                return (self.roomsRepository().length);
            };

            self.remove = function(currentRoomIndex, nextFunction) {
                var newRoomObject = new RoomViewModel({id:''});

                newRoomObject.remove(newRoomObject, function () {
                    self.roomsRepository.splice(currentRoomIndex, 1);
                    nextFunction();
                    return true;
                }, function () {

                });

                return (self.roomsRepository().length);
            };

            self.addUserInRoom = function(userIndex, currentRoomIndex) {
                var newRoomObject = new RoomViewModel({id:''});

                newRoomObject.remove(newRoomObject, function () {
                    for(var i = 0; i < self.roomsRepository()[currentRoomIndex].usersIDInRoom().length; i++) {
                        if(self.roomsRepository()[currentRoomIndex].usersIDInRoom()[i].userIndex() == userIndex) {
                            return false;
                        }
                    }
                    self.roomsRepository()[currentRoomIndex].usersIDInRoom.push({userIndex: ko.observable(userIndex)});
                    nextfunction();
                    return true;
                }, function () {

                });
            };


            self.isUserInRoom = function(userIndex, currentRoomIndex, nextFunction) {

                if(currentRoomIndex === '' || currentRoomIndex === '') {
                    return false;
                }
                for(var i = 0; i < self.roomsRepository()[currentRoomIndex].usersIDInRoom().length; i++) {
                    if(self.roomsRepository()[currentRoomIndex].usersIDInRoom()[i].userIndex() == userIndex) {
                        return true;
                    }
                }
                return false;
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
            self.pushGeneratedRoom = function(createrId) {
                var name, idCreater;
                var newArray = [];
                newArray.push({userIndex: ko.observable(giveMeRandomValue(0,5))});
                var randomValue = giveMeRandomValue(0,9);
                name = roomNames[randomValue];
                idCreater = createrId || giveMeRandomValue(0,5);
                var newRoomObject = new RoomViewModel({
                    name: name,
                    createrId: idCreater,
                    id: self.roomsRepository().length,
                    usersIDInRoom: newArray,
                    privateFlag: privateFlag[giveMeRandomValue(0,9)]
                });
                self.roomsRepository.push(newRoomObject);

            };

            function giveMeRandomValue(min , max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

        }
        return new RoomsViewModel();
    }
);
