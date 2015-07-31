/**
 * Created by vitali.nalivaika on 31.07.2015.
 */

define(["../jquery", "../knockout-3.3.0", "VM/roomViewModel", "../services/roomService"],function($, ko, roomViewModel, roomService) {
        function RoomsViewModel() {
            'use strict';

            var self = this;

            self.roomsRepository = ko.observableArray([]);

            self.add = function(name, createrID) {
                var newRoomObject = new roomViewModel({
                    name: name,
                    createrId: createrID,
                    id: self.roomsRepository().length
                });
                newRoomObject.add(newRoomObject, function () {
                    self.roomsRepository.push(newRoomObject);
                    return true;
                }, function () {

                });
            }


        }
        return new RoomsViewModel();
    }
);
