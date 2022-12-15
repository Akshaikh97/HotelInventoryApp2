import { ChangeDetectionStrategy, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'ak-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit, DoCheck{

  title= 'Rooms List';

  hotelName = 'Hilton hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  constructor() {}
  ngDoCheck(): void {
    console.log('Do changes is called.');
  }

  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Delux Room',
        amenities: 'Air Condition, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: '',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.6,
      },
      {
        roomNumber: 2,
        roomType: 'Delux Room',
        amenities: 'Air Condition, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: '',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 3.4,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Condition, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos: '',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 2.9,
      },
    ];
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    console.log(room);
    //this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Condition, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: '',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
