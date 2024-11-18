import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Visitor {
  visitorId: number;
  fullName: string;
  gender: string;
  phoneNumber: string;
  emailAddress: string;
  homeAddress: string;
  nationality: string;
  idType: string;
  idNumber: string;
  numberOfGuests: number;
  paymentMethod: string;
}

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent implements OnInit {
  fullName: string = '';

  visitor: Visitor | null = null;

  errorMessage: string | null = null;

  availableRoomIds: number[] = [];

  minCheckInDate: string = '';
  minCheckOutDate: string = '';
  checkInError: string = '';
  checkOutError: string = '';

  public booking: any = {
    visitorId: '',
    roomId: '',
    checkInDate: '',
    checkOutDate: '',
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadAvailableRoomIds();

    const today = new Date();
    this.minCheckInDate = this.formatDate(today);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    this.minCheckOutDate = this.formatDate(tomorrow);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  searchVisitor(): void {
    this.http
      .get<Visitor>(
        `http://localhost:8080/visitor/searchByName/${this.fullName}`
      )
      .subscribe({
        next: (data) => {
          this.visitor = data;
          this.errorMessage = null; // Clear any previous error
          // Automatically set visitorId in booking object
          this.booking.visitorId = this.visitor.visitorId.toString();
        },
        error: () => {
          this.errorMessage = 'Visitor not found';
          this.visitor = null; // Clear previous visitor data
          this.booking.visitorId = ''; // Reset visitorId in booking object
        },
      });
  }

  loadAvailableRoomIds(): void {
    this.http.get<any[]>('http://localhost:8080/room/available').subscribe(
      (rooms) => {
        // Map the room objects to extract only roomId
        this.availableRoomIds = rooms.map((room) => room.roomId);
      },
      (error) => {
        console.error('Error fetching available rooms:', error);
      }
    );
  }

  addBooking(): void {
    // Validate required fields
    if (
      !this.booking.checkInDate ||
      !this.booking.checkOutDate ||
      !this.booking.roomId
    ) {
      alert('Please fill in all required fields correctly.');
      return;
    }

    // Proceed with the booking process if validation passes
    this.http
      .post('http://localhost:8080/booking/addNewBooking', this.booking)
      .subscribe({
        next: () => {
          alert('Booking Successful!!!!');
          // Clear the booking form
          this.booking = {
            visitorId: '',
            roomId: '',
            checkInDate: '',
            checkOutDate: '',
          };
          this.visitor = null; // Clear visitor details
          this.fullName = ''; // Clear search input
        },
        error: (err) => {
          console.error('Error creating booking:', err);
          alert('Booking Failed. Please try again.');
        },
      });
  }

  validateDates() {
    this.checkInError = '';
    this.checkOutError = '';

    const checkInDate = new Date(this.booking.checkInDate);
    const checkOutDate = new Date(this.booking.checkOutDate);

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time for comparison

    if (checkInDate < today) {
      this.checkInError = 'Check-in date cannot be in the past.';
      this.booking.checkInDate = '';
    }

    if (checkOutDate <= today) {
      this.checkOutError = 'Check-out date must be in the future.';
      this.booking.checkOutDate = '';
    } else if (checkOutDate <= checkInDate) {
      this.checkOutError = 'Check-out date must be after the check-in date.';
      this.booking.checkOutDate = '';
    }
  }
}
