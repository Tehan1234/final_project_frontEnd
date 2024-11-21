import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-visitor',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-visitor.component.html',
  styleUrl: './add-visitor.component.css',
})
export class AddVisitorComponent {
  public visitor: any = {
    fullName: '',
    gender: '',
    phoneNumber: '',
    emailAddress: '',
    homeAddress: '',
    nationality: '',
    idType: '',
    idNumber: '',
    numberOfGuests: '',
    paymentMethod: '',
  };

  constructor(private http: HttpClient) {}

  public addNewVisitor() {
    if (
      !this.visitor.fullName ||
      !this.visitor.gender ||
      !this.visitor.phoneNumber ||
      !this.visitor.emailAddress ||
      !this.visitor.homeAddress ||
      !this.visitor.nationality ||
      !this.visitor.idType ||
      !this.visitor.idNumber || // Only one check is needed
      !this.visitor.numberOfGuests ||
      !this.visitor.paymentMethod
    ) {
      alert('Please fill in all required fields correctly.');
      return;
    }
  
    // Additional frontend validations for phone number and email
    if (!/^07\d{8}$/.test(this.visitor.phoneNumber)) {
      alert('Phone number must start with 07 and be 10 digits long.');
      return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(this.visitor.emailAddress)) {
      alert('Email must be a valid Gmail address (e.g., user@gmail.com).');
      return;
    }
  
    this.http
      .post('http://localhost:8080/visitor/addNew-Visitor', this.visitor, {
        responseType: 'text', // Expecting a string response
      })
      .subscribe((response: string) => {
        alert(response); // Show backend response message
      });
  }
  
  
}
