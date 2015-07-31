/**
 * Created by vitali.nalivaika on 29.07.2015.
 */


define(["jquery", "knockout-3.3.0"],function($, ko) {
        function UsersRepository() {
            'use strict';

            var self = this;

            self.usersRepository = ko.observableArray([]);
            var counter = 0;
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
            self.UserConstructor = function() {
                this.id = 0;
                this.name = '';
                this.lastName = '';
                this.external = '';
                this.fullName = '';
                return this;
            };

            self.generateUser = function( ) {
                var newUser = new self.UserConstructor();
                var randomValue = giveMeRandomValue(0,9);
                newUser.name = names[randomValue];
                randomValue = giveMeRandomValue(0,9);
                newUser.lastName = lastNames[randomValue];
                newUser.fullName = (newUser.name + ' ' + newUser.lastName);
                newUser.id = counter;//self.usersRepository.length+1;
                counter++;
                return newUser;
            };

            function buildUserObject(id, name, lastName, external) {
                var newUser = new self.UserConstructor();
                newUser.id = id || self.usersRepository.length+1;
                newUser.name = name || 'null';
                newUser.lastName = lastName  || '';
                newUser.fullName = newUser.name + ' ' + newUser.lastName;
                newUser.external = external || 'null';
                return newUser;
            }
            self.returnUsersRepository = function() {
                return self.usersRepository;
            };

            // return new index
            self.addUserInRepository = function(userObject) {
                var newOnject = buildUserObject(userObject.id, userObject.name, userObject.lastName, userObject.external);
                self.usersRepository.push(newOnject);
                return self.usersRepository.length - 1;
            };

            function giveMeRandomValue(min , max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }


        }
        return new UsersRepository();
    }
);





