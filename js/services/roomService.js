/**
 * Created by vitali.nalivaika on 31.07.2015.
 */


define(["../jquery"],function($) {
        function RoomService() {
            'use strict';

            var self = this;
            self.add = function(onSuccess, onError) {
                window.setTimeout(
                    function() {
                        onSuccess();
                    }, Math.random() * 1000 + 1000);
            };


            self.remove = function(onSuccess, onError) {
                window.setTimeout(
                    function() {
                        onSuccess();
                    }, Math.random() * 1000 + 1000);
            };


            self.addUserInRoom = function(onSuccess, onError) {
                window.setTimeout(
                    function() {
                        onSuccess();
                    }, Math.random() * 1000 + 1000);
            };
        }
        return new RoomService();
    }
);



