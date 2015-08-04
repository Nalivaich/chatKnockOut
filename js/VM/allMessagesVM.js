/**
 * Created by vitali.nalivaika on 31.07.2015.
 */

define(["../jquery", "../knockout-3.3.0", "VM/messageViewModel", "../services/messageService"],function($, ko, messageViewModel, messageService) {
        function RoomsViewModel() {
            'use strict';

            var self = this;

            self.messageRepository = ko.observableArray([]);


            self.add = function(data) {
                var newMessageObject = new messageViewModel({
                    idRoom: data.idRoom,
                    idUser: data.idUser,
                    message: data.message
                });
                newMessageObject.add(newMessageObject, function () {
                    self.messageRepository.push(newMessageObject);
                    return true;
                }, function () {

                });
            };



            var messagesList = [
                'tell me something interesting',
                'blue whale weighs up to 150 tons ',
                'wow',
                'I\'m bored',
                'it would be nice to go to rest',
                'you are right',
                'in the neck of the giraffe, only 5 vertebrae',
                'nice',
                'We need to find a job',
                'enough to sit in the chat, you need to get down to business'
            ];
            self.pushGeneratedRoom = function(createrId) {
                var name, idCreater,usersIDInRoom;
                var randomValue = giveMeRandomValue(0,9);
                name = roomNames[randomValue];
                idCreater = createrId || 1;
                var newRoomObject = new messageViewModel({
                    name: name,
                    createrId: idCreater,
                    id: self.messageRepository().length
                });
                self.messageRepository.push(newRoomObject);
            };

            function giveMeRandomValue(min , max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

        }
        return new RoomsViewModel();
    }
);
