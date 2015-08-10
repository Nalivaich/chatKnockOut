/**
 * Created by vitali.nalivaika on 30.07.2015.
 */

define(["../jquery", "../knockout-3.3.0"],function($, ko) {
        function UserViewModel(data) {
            'use strict';

            var self = this;

            data = $.extend({
                name: '',
                lastName: '',
                password: 1111,
                userRooms: [],
                external: ''
            }, data);

            self.id = ko.observable( data.id );
            self.name = ko.observable( data.name );
            self.lastName = ko.observable( data.lastName );
            self.password = ko.observable( data.password );
            self.userRooms = ko.observableArray( data.userRooms );
            self.external = ko.observable( data.external );

            self.fullName = ko.computed(function() {
                return (self.name() + " " + self.lastName());
            });
        }

        return UserViewModel;
    }
);

