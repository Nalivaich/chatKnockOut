/**
 * Created by vitali.nalivaika on 29.07.2015.
 */
 require(["jquery", "knockout-3.3.0",  "UsersRepository" , "roomsRepository" , "VM/allUsersVM" , "VM/allRoomsVM"], function($, ko, UsersRepository, RoomsRepository, allUsersVM, allRoomsVM) {


     function addNObjectsInRep(N, generateFunction, toArray) {
         for(var i = 0; i < N;i++ ) {
             toArray.push(generateFunction());
         }
     }

     function AppViewModel() {
         var self = this;

         self.currentUserName = ko.observable('');
         self.currentUserPassword = ko.observable('');
         self.privateFlag = ko.observable(false);
         self.currentUserIndex = ko.observable();
         /*self.currentUserObject = new UsersRepository.UserConstructor();
         self.authorizationVisible = true;*/

         self.usersRepository = allUsersVM.usersRepository;
         self.roomsRepository = allRoomsVM.roomsRepository;
         self.newRoomName = ko.observable('');

        self.createRoom = function() {
             //create new room
             allRoomsVM.add(self.newRoomName(), self.currentUserIndex());
                 /*self.newRoomName('');
                 alert(self.newRoomName);*/

         };

         self.showFunc = function(fullname, id, lastName) {
           alert(fullname);
         };

         self.readUserInfo = function() {
             self.currentUserIndex(allUsersVM.add(self.currentUserName(), self.currentUserPassword()));
             //UsersRepository.addUserInRepository(self.currentUserObject);
             self.authorizationVisible = false;
         };

         //add users/rooms
         addNObjectsInRep(5,UsersRepository.generateUser, self.usersRepository);
         addNObjectsInRep(5,RoomsRepository.generateRoom, self.roomsRepository);


         self.changeVariable = function() {
             self.intVariable("");
         }
     }


     ko.applyBindings(new AppViewModel());




 });
