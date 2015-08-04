/**
 * Created by vitali.nalivaika on 31.07.2015.
 */


define(["../jquery", "VM/roomViewModel"],function($,  RoomViewModel ){
            'use strict';

        var self = {};

        var rooms = [];

        function asyncImitation(callback) {
            window.setTimeout(callback, Math.random() * 1000 + 1000);
        }

        function getNewId() {
            var lastItem = rooms[rooms.length - 1] || { id: 0 };

            return lastItem.id + 1;
        }

        self.add = function(room, onSuccess, onError) {
            asyncImitation(function() {
                room.id = getNewId();
                alert(room.id );
                rooms.push(room);
                onSuccess(room);
            });
        };


        self.remove = function(room, onSuccess, onError) {
            asyncImitation(function() {
                rooms = $.grep(rooms, function (item) {
                    return item.id !== room.id;
                });

                onSuccess();
            });
        };



        self.addUserToRoom = function(user, room, onSuccess, onError) {
            asyncImitation(function() {
                var foundItem = $.grep(rooms, function (item) {
                    return item.id === room.id;
                })[0];

                if (foundItem) {
                    foundItem.usersIDInRoom.push(user);
                }
                onSuccess();
            });
        };


        self.getAll = function(onSuccess, onError) {
            asyncImitation(function() {
                onSuccess(rooms);
            });
        };

        self.addMessage = function(object, onSuccess, onError) {
                window.setTimeout(
                    function() {
                        onSuccess();

                    }, Math.random() * 1000 + 1000);
                return self.roomsRepository;
            };


        function getRandomValue(min , max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }



        (function prepopulate(repeats) {
            var roomTemplate = {
                name: [ 'My Best Room', 'Only men)', 'bookworms', 'Gough died', 'hitch-hiking', 'fishing', 'hunting', 'fishing & hunting', 'like a boss now', 'news' ],
                privateFlag: [  true, false, true, false, true, false, true, false, true, false ]
            };

            function generateRoom() {
                var generatedRoom = {
                    id: getNewId(),
                    createrId: getRandomValue(0, 5),
                    usersIDInRoom: [
                        { userIndex: getRandomValue(0, 5) }
                    ]
                };

                $.each(roomTemplate, function (prop, value) {
                    generatedRoom[prop] = value[getRandomValue(0, value.length - 1)];
                });

                return generatedRoom;
            }

            while (repeats--) {
                console.log(generateRoom().id);
                rooms.push(generateRoom());
            }
        })(7);


        return self;
    }
);



