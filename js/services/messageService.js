/**
 * Created by Виталий on 02.08.2015.
 */


define(["../jquery"],function($) {
            'use strict';

            var self = {};
            self.add = function(onSuccess, onError, object) {
                window.setTimeout(
                    function() {
                        onSuccess();
                    }, Math.random() * 3000 + 1000);
            };
        return self;
        }


);



