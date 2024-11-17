import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent {

  public bookingList:any = [];

  constructor(private http : HttpClient){
    this.loadRoom();
  }

  loadRoom(){
    this.http.get("http://localhost:8080/booking/getAll-room").subscribe(data=>{
      console.log(data);
      this.bookingList=data;
    })
  }



}
