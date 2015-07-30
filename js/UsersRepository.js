/**
 * Created by vitali.nalivaika on 29.07.2015.
 */


define(["jquery"],function($) {
        function UsersRepository() {
            'use strict';

            var self = this;

            var usersRepository = [];

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
            };

            self.generateUser = function( ) {
                var newUser = new self.UserConstructor();
                var randomValue = giveMeRandomValue(0,9);
                newUser.name = names[randomValue];
                randomValue = giveMeRandomValue(0,9);
                newUser.lastName = lastNames[randomValue];
                newUser.id = usersRepository.length+1;
                return newUser;
            };

            function buildUserObject(id, name, lastName, external) {
                var newUser = new self.UserConstructor();
                newUser.id = id || usersRepository.length+1;
                newUser.name = name || 'null';
                newUser.lastName = lastName  || 'null';
                newUser.external = external || 'null';
                return newUser;
            }
            self.returnUsersRepository = function() {
                return usersRepository;
            };

            // return new index
            self.addUserInRepository = function(userObject) {
                var newOnject = buildUserObject(userObject.id, userObject.name, userObject.lastName, userObject.external);
                usersRepository.push(newOnject);
                return usersRepository.length - 1;
            };

            function giveMeRandomValue(min , max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }


        }
        return new UsersRepository();
    }
);





