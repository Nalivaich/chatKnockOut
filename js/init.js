/**
 * Created by vitali.nalivaika on 29.07.2015.
 */
 require(["jquery", "knockout-3.3.0",  "UsersRepository" , "roomsRepository"], function($, ko, UsersRepository, RoomsRepository) {


     UsersRepository.addUserInRepository(UsersRepository.generateUser());
     UsersRepository.addUserInRepository(UsersRepository.generateUser());
     UsersRepository.addUserInRepository(UsersRepository.generateUser());
     UsersRepository.addUserInRepository(UsersRepository.generateUser());
     UsersRepository.addUserInRepository(UsersRepository.generateUser());
     UsersRepository.addUserInRepository(UsersRepository.generateUser());

     RoomsRepository.addRoomInRepository(RoomsRepository.generateRoom());
     RoomsRepository.addRoomInRepository(RoomsRepository.generateRoom());
     RoomsRepository.addRoomInRepository(RoomsRepository.generateRoom());
     RoomsRepository.addRoomInRepository(RoomsRepository.generateRoom());
     RoomsRepository.addRoomInRepository(RoomsRepository.generateRoom(56));


     function AppViewModel() {


         var self = this;
         self.currentUserObject = new UsersRepository.UserConstructor();
         self.authorizationVisible = true;

         self.usersRepository = UsersRepository.returnUsersRepository();
         self.roomsRepository = ko.observableArray(RoomsRepository.returnRoomsRepository());
         //console.log(self.roomsRepository().length);

         self.intVariable = ko.observable('11111');



         self.readUserInfo = function() {
             self.currentUserObject.name = (document.getElementsByName("loginInput")[0].value);
             self.currentUserObject.password = (document.getElementsByName("passwordInput")[0].value);
             UsersRepository.addUserInRepository(self.currentUserObject);
             self.authorizationVisible = false;

         };

         /*self.fullName = ko.computed(function() {
             return (self.firstName() + " " + self.lastName());
         }, viewModel);*/

         /*self.addElement = function() {
             self.Myarray.push('new element');
         };*/

         self.changeVariable = function() {
             self.intVariable("");
         }
     }


     ko.applyBindings(new AppViewModel());




 });
