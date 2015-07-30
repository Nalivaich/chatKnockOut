/**
 * Created by vitali.nalivaika on 29.07.2015.
 */


UsersRepository.addUserInRepository(UsersRepository.generateUser());
UsersRepository.addUserInRepository(UsersRepository.generateUser());
UsersRepository.addUserInRepository(UsersRepository.generateUser());
UsersRepository.addUserInRepository(UsersRepository.generateUser());
UsersRepository.addUserInRepository(UsersRepository.generateUser());
UsersRepository.addUserInRepository(UsersRepository.generateUser());
//alert(UsersRepository.addUserInRepository({ name:'sdfsdf', lastName: 'sdfsdfs'}));




var usRep = UsersRepository.returnUsersRepository();
/*for(var i = 0; i < usRep.length; i++) {
 alert(usRep[i].name + usRep[i].id + usRep[i].lastName );
 }*/



RoomsRepository.addRoomInRepository(RoomsRepository.generateRoom());
RoomsRepository.addRoomInRepository(RoomsRepository.generateRoom());
RoomsRepository.addRoomInRepository(RoomsRepository.generateRoom());
RoomsRepository.addRoomInRepository(RoomsRepository.generateRoom());
RoomsRepository.addRoomInRepository(RoomsRepository.generateRoom(56));
//alert(RoomsRepository.addRoomInRepository({id:100500, name: 'exampleRoom' , createrId: 1}));

var roomRep = RoomsRepository.returnRoomsRepository();

/*for(var i = 0; i < roomRep.length; i++) {
 alert(roomRep[i].name + roomRep[i].id + roomRep[i].usersIDInRoom[0] +' ' +roomRep[i].createrId );
 }*/
