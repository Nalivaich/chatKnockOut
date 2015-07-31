/**
 * Created by vitali.nalivaika on 31.07.2015.
 */


define(["../jquery"],function($) {
        function UsersViewModel() {
            'use strict';

            var self = this;
            self.add = function(onSuccess, onError) {
                window.setTimeout(
                    function() {
                        onSuccess();
                    }, Math.random() * 3000 + 1000);
            }
        }
        return new UsersViewModel();
    }
);



