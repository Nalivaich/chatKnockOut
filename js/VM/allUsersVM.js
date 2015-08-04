/**
 * Created by vitali.nalivaika on 31.07.2015.
 */

define(["../jquery", "../knockout-3.3.0", "VM/userViewModel", "../services/userService"],function($, ko, UserViewModel, userService) {
        function UsersViewModel() {
            'use strict';

            var self = this;

            self.usersRepository = ko.observableArray([]);

            self.add = function(name, password) {
                var newUserObject = new UserViewModel({
                    name: name,
                    password: password,
                    id: self.usersRepository().length
                });
                userService.add(newUserObject, function () {
                    self.usersRepository.push(newUserObject);
                    return true;
                }, function () {

                });
                return (self.usersRepository().length ); //неверно,, задержка все ломает
            };

            self.addUserRoom = function(userIndex, roomIndex, nextFunction) {
                var newUserObject = new UserViewModel({id: ''});
                userService.addUserRoom(newUserObject, function () {
                    self.usersRepository()[userIndex].userRooms.push({roomIndex: ko.observable(roomIndex)});
                    nextFunction();
                    return true;
                }, function () {

                });

            };

            self.isCurrentUserRoom = function(currentRoomIndex, currentUserIndex) {

                if(currentRoomIndex === '' || currentUserIndex === '') {
                    return false;
                }

                if(currentRoomIndex && currentUserIndex) {}
                //alert(self.usersRepository()[currentUserIndex].userRooms().length);
                    for(var i = 0; i < self.usersRepository()[currentUserIndex].userRooms().length; i++) {
                       // alert(self.usersRepository()[currentUserIndex].userRooms()[i].roomIndex() + " " + currentRoomIndex);
                        if(self.usersRepository()[currentUserIndex].userRooms()[i].roomIndex() == currentRoomIndex) {
                            return true;
                        }
                    }
                    return false;

            };

            /*self.isCurrentUserRoom = function(currentRoomIndex, currentUserIndex,isCurrentUserRoom ) {
                var newUserObject = new UserViewModel({id: ''});

                newUserObject.addUserRoom(newUserObject, function () {
                    if(currentRoomIndex === '' || currentUserIndex === '') {
                        isCurrentUserRoom(false);
                    }
                    if(currentRoomIndex && currentUserIndex) {}
                    for(var i = 0; i < self.usersRepository()[currentUserIndex].userRooms().length; i++) {
                        if(self.usersRepository()[currentUserIndex].userRooms()[i].roomIndex() == currentRoomIndex) {
                            isCurrentUserRoom(true);
                        }
                    }
                    isCurrentUserRoom(false);
                }, function () {

                });
                alert(isCurrentUserRoom);
                return false;
            };*/



            var names = [
                'Kirill',
                'Vlad',
                'Anton',
                'Sergey',
                'Genadiy',
                'Aleksandr',
                'Leonid',
                'Dmitry',
                'Artem',
                'Pavel'
            ] ;
            var lastNames = [
                'Kirillovich',
                'Vladimirovich',
                'Antonovich',
                'Sergeevich',
                'Genadievich',
                'Aleksandrovich',
                'Leonidovich',
                'Dmitrievich',
                'Artemovich',
                'Kazimirovich'
            ];

            self.pushGeneratedUser = function( ) {
                var name, lastName;
                var randomValue = giveMeRandomValue(0,9);
                name = names[randomValue];
                randomValue = giveMeRandomValue(0,9);
                lastName = lastNames[randomValue];

                var newUserObject = new UserViewModel({
                    name: name,
                    lastName: lastName,
                    id: self.usersRepository().length
                });
                self.usersRepository.push(newUserObject);
            };

            function giveMeRandomValue(min , max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }


        }
        return new UsersViewModel();
    }
);

