/**
 * Created by vitali.nalivaika on 29.07.2015.
 */


define(["jquery"],function($) {
        function RoomsRepository() {
            'use strict';

            var self = this;

            self.roomsRepository = [];
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
            self.roomsConstructor = function() {
                this.id = 0;
                this.createrId = 0;
                this.name = '';
                this.privateFlag = false;
                this.usersIDInRoom = [];
                this.messagesHistory = [];
                this.external = '';

            };

            self.generateRoom = function(createrId) {
                var newRoom = new self.roomsConstructor();
                var randomValue = giveMeRandomValue(0,9);
                newRoom.name = roomNames[randomValue];
                randomValue = giveMeRandomValue(0,9);
                newRoom.createrId = createrId || 1;
                newRoom.id = self.roomsRepository.length+1;
                newRoom.usersIDInRoom.push(1);
                return newRoom;
            };
            self.addUserInRoom = function(roomIndex, userId) {
                self.roomsRepository[roomIndex].usersIDInRoom.push(userId);
            };

            function buildRoomObject(id, createrId, name, privateFlag, usersInRoom, external) {
                var newUser = new self.roomsConstructor();
                newUser.id = id || self.roomsRepository.length+1;
                newUser.createrId = createrId || 'unknown';
                newUser.name = name || 'null';
                newUser.privateFlag = privateFlag  || false;
                newUser.usersIDInRoom[0] = usersInRoom || 0;
                newUser.external = external || 'null';
                return newUser;
            }

            // return new index
            self.addRoomInRepository = function(roomObject) {
                var newOnject = buildRoomObject(roomObject.id, roomObject.createrId,  roomObject.name, roomObject.privateFlag, roomObject.usersIDInRoom, roomObject.external);
                self.roomsRepository.push(newOnject);
                return self.roomsRepository.length - 1;
            };

            self.removeRoomFromRepository = function(index) {
                self.roomsRepository.splice(index, 1);
            };

            self.returnRoomsRepository = function() {
                return self.roomsRepository;
            };

            function giveMeRandomValue(min , max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

        }
        return new RoomsRepository();
    }
);



