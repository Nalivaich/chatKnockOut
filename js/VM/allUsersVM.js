/**
 * Created by vitali.nalivaika on 31.07.2015.
 */

define(["../jquery", "../knockout-3.3.0", "VM/userViewModel", "../services/userService"],function($, ko, UserViewModel, userService) {
        function UsersViewModel() {
            'use strict';

            var self = this;

            self.usersRepository = ko.observableArray([]);

            self.getAll = function getAll() {
                userService.getAll(function(receivedUsers) {
                    $.each(receivedUsers, function(index, receivedUser) {
                        self.usersRepository.push(new UserViewModel(receivedUser));
                    })
                }, function() {
                    console.log('can\'t receive users');
                });
            }();

            self.add = function(name, password, nextFunction) {
                userService.add({
                    name: name,
                    password: password
                }, function (newObject) {
                    var newUser = new UserViewModel(newObject);
                    self.usersRepository.push(newUser);
                    nextFunction(newUser.id());
                    return true;
                }, function () {
                    console.log('can\'t add user');
                });
            };

            self.addUserRoom = function(userId, roomId, nextFunction) {
                userService.addUserRoom({
                    userIndex: userId
                }, {
                    roomIndex: roomId
                }, function () {

                    var observableUser = $.grep(self.usersRepository(), function(item) {
                        return item.id() === userId;
                    })[0];

                    observableUser.userRooms.push({
                        roomIndex: ko.observable(roomId)
                    });
                    nextFunction();
                }, function () {
                    console.log('can\'t add user`s room');
                });

            };

            self.isCurrentUserRoom = function(currentRoomIndex, currentUserIndex) {
                if(currentRoomIndex === '' || currentUserIndex === '') {
                    return false;
                }

                var observableUser = $.grep(self.usersRepository(), function(item) {
                    return item.id() === currentUserIndex;
                })[0];

                var foundUserInRoom = $.grep(observableUser.userRooms(), function (userItem, index) {
                    return userItem.roomIndex === currentRoomIndex;
                });

                if (!foundUserInRoom.length) {
                    return false;
                } else {
                    return true;
                }

            };

            self.findFullName = function(userID) {
                var observableUser = $.grep(self.usersRepository(), function(item) {
                    return item.id() === userID;
                })[0];
                return observableUser.fullName();
            }

        }
        return new UsersViewModel();
    }
);

