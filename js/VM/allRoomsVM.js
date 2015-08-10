/**
 * Created by vitali.nalivaika on 31.07.2015.
 */

define(["../jquery", "../knockout-3.3.0", "VM/roomViewModel", "../services/roomService"],function($, ko, RoomViewModel, roomService) {
        function RoomsViewModel() {
            'use strict';

            var self = this;

            self.roomsRepository = ko.observableArray([]);

            self.getAll = function getAll() {
                roomService.getAll(function(receivedRooms) {
                    $.each(receivedRooms, function(index, receivedRoom) {
                        self.roomsRepository.push(new RoomViewModel(receivedRoom));
                    })
                }, function() {
                    console.log('can\'t receive rooms');
                });
            }();

            self.add = function(name, createrID, privateFlag, nextfunction) {
                roomService.add({
                    name: name,
                    createrId: createrID,
                    privateFlag: privateFlag,
                    usersIDInRoom: [{
                        userIndex: createrID
                    }]
                }, function(room) {
                    var newRoom = new RoomViewModel(room);

                    self.roomsRepository.push(newRoom);
                    nextfunction(newRoom.id());

                    return true;
                }, function() {
                    console.log('can\'t add room');
                });
            };

            self.remove = function(currentRoomIndex, nextFunction) {
                roomService.remove({
                    id: ''
                }, function() {
                    var index;
                    for(var i = 0; i <  self.roomsRepository().length; i++) {
                        if(self.roomsRepository()[i].id() == currentRoomIndex) {
                            index = i;
                        }
                    }
                    self.roomsRepository.splice(index, 1);
                    nextFunction('');

                    return true;
                }, function() {
                    console.log('can\'t remove room');
                });
            };

            self.addUserToRoom = function(userIndex, currentRoomIndex, nextfunction) {
                roomService.addUserToRoom({
                    userIndex: userIndex
                }, {
                    id: currentRoomIndex
                }, function() {
                    var observableRoom = $.grep(self.roomsRepository(), function(item) {
                        return item.id() === currentRoomIndex;
                    })[0];

                    if (!observableRoom) {
                        return;
                    }

                    var foundUserInRoom = $.grep(observableRoom.usersIDInRoom(), function (userItem, index) {

                        return userItem.userIndex() === userIndex;
                    });

                    if (!foundUserInRoom.length) {
                        observableRoom.usersIDInRoom.push({
                            userIndex: ko.observable(userIndex)
                        });
                    }
                }, function() {
                    console.log('can\'t add user to room');
                });
            };


            self.isUserInRoom = function(userIndex, currentRoomIndex, nextFunction) {

                if(currentRoomIndex === '' || currentRoomIndex === '') {
                    return false;
                }

                var observableRoom = $.grep(self.roomsRepository(), function(item) {
                    return item.id() === currentRoomIndex;
                })[0];

                var foundUserInRoom = $.grep(observableRoom.usersIDInRoom(), function (userItem, index) {

                    return userItem.userIndex() === userIndex;
                });

                if (!foundUserInRoom.length) {
                    return false;
                    } else {
                    return true;
                }

            };


            self.addMessage = function(object) {
                roomService.addMessage(object, function () {

                    var observableRoom = $.grep(self.roomsRepository(), function(item) {
                        return item.id() === object.currentRoomId;
                    })[0];

                    observableRoom.messagesHistory.push({message: object.message, userId: object.userId });
                    return true;
                }, function () {
                    console.log('can\'t add message');
                });
            };


        }
        return new RoomsViewModel();
    }
);
