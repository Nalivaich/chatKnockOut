/**
 * Created by vitali.nalivaika on 29.07.2015.
 */
 require(["jquery", "knockout-3.3.0",  "UsersRepository" , "roomsRepository" , "VM/allUsersVM" , "VM/allRoomsVM", "VM/allMessagesVM"], function($, ko, UsersRepository, RoomsRepository, allUsersVM, allRoomsVM, allMessagesVM) {

     function AppViewModel() {
         var self = this;

         self.currentUserName = ko.observable('Guest');
         self.currentUserPassword = ko.observable('');
         self.currentUserId = ko.observable();
         self.currentMessage = ko.observable('');
         self.currentRoomId = ko.observable('');
         self.privateFlag = ko.observable(false);
         self.newRoomName = ko.observable('');
         self.activeRoomFlag = ko.observable(false);
         self.roomCreaterFlag =  ko.observable(false);
         self.authorizationFlag = ko.observable(false);
         self.addOrRemove  = ko.observable(false);
         self.currentRoom = ko.pureComputed(function() {
             return self.roomsRepository().filter(function (item) {
                 return item.id() == self.currentRoomId();
             })[0];
         }, self);

         self.usersRepository = allUsersVM.usersRepository;
         self.roomsRepository = allRoomsVM.roomsRepository;


        self.createRoom = function() {
            allRoomsVM.add(self.newRoomName(), self.currentUserId(), self.privateFlag(), function(newId) {
                self.currentRoomId(newId);
                allUsersVM.addUserRoom(self.currentUserId(), self.currentRoomId(), function() {
                    self.roomCreaterFlag(allUsersVM.isCurrentUserRoom(self.currentRoomId() , self.currentUserId()));
                    self.activeRoomFlag(true);
                    self.newRoomName('');
                });
            });
         };

         self.removeRoom = function() {
             allRoomsVM.remove(self.currentRoomId(), function(param) {
                 self.currentRoomId(param);
                 self.roomCreaterFlag(allUsersVM.isCurrentUserRoom(self.currentRoomId(), self.currentUserId()));
                 self.activeRoomFlag(false);
             });
         };

         self.addUserToRoom = function(userId) {
             allRoomsVM.addUserToRoom(userId, self.currentRoomId());
         };

         self.showFullName = function(fullname, id, lastName) {
             alert(fullname());
         };

         self.readUserInfo = function() {
             allUsersVM.add(self.currentUserName(), self.currentUserPassword(), function(param) {
                 self.currentUserId(param);
                 self.authorizationFlag(true);
             });
         };

         self.addMessage = function() {
           allMessagesVM.add({
               idRoom: self.currentRoomId(),
               idUser: self.currentUserId(),
               message: self.currentMessage()
           });
           allRoomsVM.addMessage({
               currentRoomId: self.currentRoomId(),
               message: ko.observable(self.currentUserName() + " Say: " + self.currentMessage()),
               userId: self.currentUserId()
           });
           self.currentMessage('');
         };

         self.changeCurrentRoom = function(newCurrentRoomId, currentPrivateFlag) {
             if(self.currentUserId() == '' || self.currentUserId() == undefined) {
                 return false;
             }

             if(currentPrivateFlag && !(allRoomsVM.isUserInRoom(self.currentUserId(),newCurrentRoomId))){
                 alert("access denied");
                 return false;
             }

             self.currentRoomId(newCurrentRoomId);
             self.roomCreaterFlag(allUsersVM.isCurrentUserRoom(self.currentRoomId(), self.currentUserId()));
             self.addUserToRoom(self.currentUserId());
             self.activeRoomFlag(true);
         };

         self.findFullName = function(userId) {
            return allUsersVM.findFullName(userId);
         };

         self.resetCurrentUserName = function() {
             self.currentUserName('');
         }
     }
     ko.applyBindings(new AppViewModel());

 });
