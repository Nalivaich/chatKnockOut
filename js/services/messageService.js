/**
 * Created by Виталий on 02.08.2015.
 */


define(["../jquery"],function($) {
        function MessageService() {
            'use strict';

            var self = this;
            self.add = function(onSuccess, onError) {
                window.setTimeout(
                    function() {
                        onSuccess();
                    }, Math.random() * 3000 + 1000);
            }
        }
        return new MessageService();
    }
);



