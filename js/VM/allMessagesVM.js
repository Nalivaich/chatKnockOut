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
                messageService.add(newMessageObject, function (newObj) {
                    self.messageRepository.push(newObj);
                    return true;
                }, function () {

                });
            };

        }
        return new RoomsViewModel();
    }
);
