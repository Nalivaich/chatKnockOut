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
         self.addOrRemove  = ko.observable(false);

         self.currentRoom = ko.pureComputed(function() {
             return self.roomsRepository()[self.currentRoomIndex()]
         }, self);
         self.currentUser = ko.pureComputed(function() {
             return self.usersRepository()[self.currentUserIndex()]
         }, self);


         self.usersRepository = allUsersVM.usersRepository;
         self.roomsRepository = allRoomsVM.roomsRepository;


        self.createRoom = function() {
            self.currentRoomIndex(allRoomsVM.add(self.newRoomName(), self.currentUserIndex(), self.privateFlag(), function() {
                    allUsersVM.addUserRoom(self.currentUserIndex(), self.currentRoomIndex(), function() {
                        self.roomCreaterFlag(allUsersVM.isCurrentUserRoom(self.currentRoomIndex() , self.currentUserIndex()));
                        self.activeRoomFlag(true);
                        self.newRoomName('');
                    });
            }));

         };

         self.removeRoom = function() {
             self.currentRoomIndex(allRoomsVM.remove(self.currentRoomIndex(), function() {
                 self.roomCreaterFlag(allUsersVM.isCurrentUserRoom(self.currentRoomIndex(), self.currentUserIndex()));
                 self.activeRoomFlag(false);
             }));

         };

         self.addUserInRoom = function(userIndex) {

             allRoomsVM.addUserInRoom(userIndex, self.currentRoomIndex());
         };



         self.showFunc = function(fullname, id, lastName) {
           alert(fullname());
         };

         self.readUserInfo = function() {
             self.currentUserIndex(allUsersVM.add(self.currentUserName(), self.currentUserPassword()));
             self.authorizationFlag(true);
             //alert(self.roomsRepository()[self.currentRoomIndex()].name()); //!!!!!!!!!!!!!!!!!!!!
         };

         self.addMessage = function() {
           allMessagesVM.add({
               idRoom: self.currentRoomIndex(),
               idUser: self.currentUserIndex(),
               message: self.currentMessage()
           });

           allRoomsVM.addMessage({
               currentRoomIndex: self.currentRoomIndex(),
               message: ko.observable(self.currentUserName() + " Say: " + self.currentMessage()),
               userId: ko.observable(self.currentUserIndex())
           });

           self.currentMessage('');
         };

         self.changeCurrentRoom = function(newCurrentRoomId, currentPrivateFlag) {
             if(self.currentUserIndex() == '' || self.currentUserIndex() == undefined) {
                 return false;
             }

             if(currentPrivateFlag && !(allRoomsVM.isUserInRoom(self.currentUserIndex(),newCurrentRoomId))){
                 alert("access denied");
                 return false;
             }
             self.currentRoomIndex(newCurrentRoomId);
             self.roomCreaterFlag(allUsersVM.isCurrentUserRoom(self.currentRoomIndex(), self.currentUserIndex()));
             self.addUserInRoom(self.currentUserIndex());
             self.activeRoomFlag(true);

         };


         //add users/rooms
         useMethodNTimes(6,allUsersVM.pushGeneratedUser);
         //useMethodNTimes(6,allRoomsVM.pushGeneratedRoom);

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
