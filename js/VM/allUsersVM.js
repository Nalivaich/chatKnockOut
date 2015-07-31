/**
 * Created by vitali.nalivaika on 31.07.2015.
 */

define(["../jquery", "../knockout-3.3.0", "VM/userViewModel", "../services/userService"],function($, ko, UserViewModel, userService) {
        function UsersViewModel() {
            'use strict';

            var self = this;

            self.usersRepository = ko.observableArray([]);

            self.add = function(name, password) {
                var newUserObject = new UserViewModel({
                    name: name,
                    password: password,
                    id: self.usersRepository().length
                });
                newUserObject.add(newUserObject, function () {
                    self.usersRepository.push(newUserObject);
                    return true;
                }, function () {

                });
                return (self.usersRepository().length -1); //неверно,, задержка все ломает
            }


        }
        return new UsersViewModel();
    }
);

