/**
 * Created by vitali.nalivaika on 30.07.2015.
 */

define(["../jquery", "../knockout-3.3.0"],function($, ko) {
        function UserViewModel(data) {
            'use strict';

            var self = this;

            self.id = ko.observable(data.id || 0);
            self.name = ko.observable(data.name || '');
            self.lastName = ko.observable(data.lastName || '');
            self.password = ko.observable(data.password || '1111');
            self.userRooms = ko.observableArray([ ]);
            self.external = ko.observable(data.external || '');

            self.fullName = ko.computed(function() {
                return (self.name() + " " + self.lastName());
            });

        }

        return UserViewModel;
    }
);

