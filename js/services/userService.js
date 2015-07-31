/**
 * Created by vitali.nalivaika on 30.07.2015.
 */

define(["../jquery"],function($) {
        function UsersViewModel() {
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
            }
        }
        return new UsersViewModel();
    }
);




function getAllUsers() {
    return [{name: 'Ivan'},{}]
}

