import { Routes } from '@angular/router';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { AddVisitorComponent } from './pages/add-visitor/add-visitor.component';
import { VisitorListComponent } from './pages/visitor-list/visitor-list.component';
import { SearchVisitorComponent } from './pages/search-visitor/search-visitor.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { RoomListComponent } from './pages/room-list/room-list.component';
import { BookingComponent } from './pages/booking/booking.component';
import { BookingListComponent } from './pages/booking-list/booking-list.component';
import { OnlineVisitorBookingComponent } from './pages/online-visitor-booking/online-visitor-booking.component';


export const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent,
  },
  {
    path: 'dashBoard',
    component: DashBoardComponent,
  },
  {
    path: 'addvisitor',
    component: AddVisitorComponent,
  },
  {
    path: 'visitorlist',
    component: VisitorListComponent,
  },
  {
    path: 'searchVisitor',
    component: SearchVisitorComponent,
  },
  {
    path: 'addRoom',
    component: AddRoomComponent,
  },
  {
    path: 'roomList',
    component: RoomListComponent,
  },
  {
    path: 'booking',
    component: BookingComponent,
  },
  {
    path: 'booking-list',
    component: BookingListComponent,
  },
  {
    path: 'onlineVisitor-booking',
    component: OnlineVisitorBookingComponent,
  },
];
