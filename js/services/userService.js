/**
 * Created by vitali.nalivaika on 30.07.2015.
 */

define(["../jquery", "VM/userViewModel"],function($, UserViewModel) {
        'use strict';

        var self = {};
        self.usersRepository = [];
        self.add = function(object, onSuccess, onError) {
            window.setTimeout(
                function() {
                    /*if (Math.random() > 0.5) {
                     onSuccess();
                     } else {
                     onError();
                     }*/
                    onSuccess();
                }, Math.random() * 1000 + 1000);
        };

        self.addUserRoom = function(object, onSuccess, onError) {
            window.setTimeout(
                function() {

                    onSuccess();
                }, Math.random() * 1000 + 1000);
        };

        self.isCurrentUserRoom = function(object, onSuccess, onError) {
            window.setTimeout(
                function() {
                }, Math.random() * 1000 + 1000);
        };



        var names = [
            'Kirill',
            'Vlad',
            'Anton',
            'Sergey',
            'Genadiy',
            'Aleksandr',
            'Leonid',
            'Dmitry',
            'Artem',
            'Pavel'
        ] ;
        var lastNames = [
            'Kirillovich',
            'Vladimirovich',
            'Antonovich',
            'Sergeevich',
            'Genadievich',
            'Aleksandrovich',
            'Leonidovich',
            'Dmitrievich',
            'Artemovich',
            'Kazimirovich'
        ];

        self.generatedUser = function( ) {
            var name, lastName;
            var randomValue = giveMeRandomValue(0,9);
            name = names[randomValue];
            randomValue = giveMeRandomValue(0,9);
            lastName = lastNames[randomValue];

            var newUser = new UserViewModel({
                name: name,
                lastName: lastName,
                id: self.usersRepository.length
            });

            return newUser;
        };

        self.pushGeneratedRoom = function(createrId) {
            for(var i = 0; i < 5; i++) {
                var newUserObject = self.generatedUser(i);
                self.usersRepository.push(newUserObject);
            }
        }();

        function giveMeRandomValue(min , max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }


        return self;
    }
);


