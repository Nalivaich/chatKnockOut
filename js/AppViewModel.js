/**
 * Created by vitali.nalivaika on 29.07.2015.
 */
 require(["jquery", "knockout-3.3.0",  "UsersRepository" , "roomsRepository" , "VM/allUsersVM" , "VM/allRoomsVM", "VM/allMessagesVM"], function($, ko, UsersRepository, RoomsRepository, allUsersVM, allRoomsVM, allMessagesVM) {



     function AppViewModel() {
         var self = this;

         self.currentUserName = ko.observable('Guest');
         self.currentUserPassword = ko.observable('');
         self.currentUserIndex = ko.observable();
         self.currentMessage = ko.observable('');
         self.currentRoomIndex = ko.observable('');
         self.privateFlag = ko.observable(false);
         self.newRoomName = ko.observable('');
         self.activeRoomFlag = ko.observable(false);
         self.roomCreaterFlag =  ko.observable(false);
         self.authorizationFlag = ko.observable(false);
         /*self.currentUserObject = new UsersRepository.UserConstructor();
         self.authorizationVisible = true;*/

         self.usersRepository = allUsersVM.usersRepository;
         self.roomsRepository = allRoomsVM.roomsRepository;


        self.createRoom = function() {
             //create new room
            self.currentRoomIndex(allRoomsVM.add(self.newRoomName(), self.currentUserIndex(), self.privateFlag(), function() {
                //if(self.currentUserIndex()) {
                    allUsersVM.addUserRoom(self.currentUserIndex(), self.currentRoomIndex(), function() {
                        self.roomCreaterFlag(allUsersVM.isCurrentUserRoom(self.currentRoomIndex() , self.currentUserIndex()));
                        //self.addUserInRoom(self.currentUserIndex());
                        self.activeRoomFlag(true);
                        //self.roomCreaterFlag(true);
                        self.newRoomName('');
                    });
            }));

         };

         self.removeRoom = function() {
             self.currentRoomIndex(allRoomsVM.remove(self.currentRoomIndex()));
             self.activeRoomFlag(false);
             //self.roomCreaterFlag(false);
         };

         self.addUserInRoom = function(userIndex) {
             allRoomsVM.addUserInRoom(userIndex, self.currentRoomIndex());
         };
         self.addUserToChat = function() {

         };

         self.showFunc = function(fullname, id, lastName) {
           alert(fullname());
         };

         self.readUserInfo = function() {
             self.currentUserIndex(allUsersVM.add(self.currentUserName(), self.currentUserPassword()));
             //UsersRepository.addUserInRepository(self.currentUserObject);
             self.authorizationFlag(true);
             //alert(self.roomsRepository()[self.currentRoomIndex()].name()); //!!!!!!!!!!!!!!!!!!!!
         };

         self.addMessage = function() {
           allMessagesVM.add({
               idRoom: self.currentRoomIndex(),
               idUser: self.currentUserIndex(),
               message: self.currentMessage()
           });

             self.roomsRepository()[self.currentRoomIndex()].messagesHistory.push({message: ko.observable(self.currentUserName() + " Say: " + self.currentMessage())});
             self.currentMessage('');
             //alert(self.roomsRepository()[self.currentRoomIndex()].messagesHistory()[0].message());

         };

         self.changeCurrentRoom = function(newCurrentRoomId) {
             if(self.currentUserIndex() == '' || self.currentUserIndex() == undefined) {
                 return false;
             }
             self.currentRoomIndex(newCurrentRoomId);
             self.roomCreaterFlag(allUsersVM.isCurrentUserRoom(self.currentRoomIndex(), self.currentUserIndex()));
             self.addUserInRoom(self.currentUserIndex());
             self.activeRoomFlag(true);


         };

         //add users/rooms
         useMethodNTimes(6,allUsersVM.pushGeneratedUser);
         useMethodNTimes(6,allRoomsVM.pushGeneratedRoom);

         function useMethodNTimes(N, method) {
             for(var i = 0; i < N;i++ ) {
                 var randomValue = giveMeRandomValue(0,self.usersRepository().length);
                 method(randomValue);
             }
         }

         function giveMeRandomValue(min , max) {
             return Math.floor(Math.random() * (max - min + 1)) + min;
         }


         self.changeVariable = function() {
             self.intVariable("");
         }
     }


     ko.applyBindings(new AppViewModel());




 });
