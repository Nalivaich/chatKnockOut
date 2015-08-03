/**
 * Created by vitali.nalivaika on 30.07.2015.
 */

define(["../jquery"],function($) {
        function UserService() {
            'use strict';

            var self = this;
            self.add = function(onSuccess, onError) {
                window.setTimeout(
                    function() {
                        /*if (Math.random() > 0.5) {
                            onSuccess();
                        } else {
                            onError();
                        }*/
                        onSuccess();
                    }, Math.random() * 3000 + 1000);
            };



            self.addUserRoom = function(onSuccess, onError) {
                window.setTimeout(
                    function() {

                        onSuccess();
                    }, Math.random() * 1000 + 1000);
            }
        }
        return new UserService();
    }
);




function getAllUsers() {
    return [{name: 'Ivan'},{}]
}

