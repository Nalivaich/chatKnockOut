/**
 * Created by vitali.nalivaika on 29.07.2015.
 */


define(["jquery"],function($) {
        function RoomsRepository() {
            'use strict';

            var self = this;

            var roomsRepository = [];
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
                this.name = '';
                this.privateFlag = false;
                this.messagesHistory = '';
                this.external = '';
            };

            self.generateRoom = function( ) {
                var newRoom = new self.roomsConstructor();
                var randomValue = giveMeRandomValue(0,9);
                newRoom.name = roomNames[randomValue];
                newRoom.id = roomsRepository.length+1;
                return newRoom;
            };

            function buildRoomObject(id, name, privateFlag, external) {
                var newUser = new self.UserConstructor();
                newUser.id = id || 0;
                newUser.name = name || 'null';
                newUser.privateFlag = privateFlag  || false;
                newUser.external = external || 'null';
                return newUser;
            }

            // return new index
            self.addRoomInRepository = function(userObject) {
                roomsRepository.push(userObject);
                return roomsRepository.length - 1;
            };
            // return new index
            self.addRoomInRepository = function(id, name, lastName, external) {
                var newOnject = buildRoomObject(id, name, lastName, external);
                roomsRepository.push(newOnject);
                return roomsRepository.length - 1;
            };

            self.removeRoomFromRepository = function(index) {
                roomsRepository.splice(index, 1);
            };

            function giveMeRandomValue(min , max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

        }
        return new RoomsRepository();
    }
);



