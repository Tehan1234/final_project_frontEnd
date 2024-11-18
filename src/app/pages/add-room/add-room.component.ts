import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css',
})
export class AddRoomComponent {
  public room: any = {
    typeOfRoom: '',
    bedType: '',
    amenities: '',
    pricePerNight: '',
  };

  constructor(private http: HttpClient) {}

  public addNewRoom() {
    if (
      !this.room.typeOfRoom ||
      !this.room.bedType ||
      !this.room.amenities ||
      !this.room.pricePerNight
    ) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    this.http
      .post('http://localhost:8080/room/addNew-room', this.room)
      .subscribe((data) => {
        alert('room Added!!!!');
      });
  }
}
