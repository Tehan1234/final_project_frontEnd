import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './room-list.component.html',
  styleUrl: './room-list.component.css'
})
export class RoomListComponent {
  public roomList:any = [];

  constructor(private http : HttpClient){
    this.loadRoom();
  }

  loadRoom(){
    this.http.get("http://localhost:8080/room/getAll-room").subscribe(data=>{
      console.log(data);
      this.roomList=data;
    })
  }

}
