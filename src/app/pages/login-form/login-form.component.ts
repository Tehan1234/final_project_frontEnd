import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [NgIf,FormsModule,],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit  {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.username = "";
   this.password = "";
  }


  ngOnInit(): void {
   this.username = "";
   this.password = "";
  }

  


  login() {
    // Check if the username is an email (contains '@')
    if (this.username.includes('@')) {
      // Online Visitor Booking API call
      this.onlineVisitorLogin();
    } else {
      // Receptionist Login API call
      this.receptionistLogin();
    }
  }

  onlineVisitorLogin() {
    const onlineVisitorLoginApiUrl = 'http://localhost:8080/online-visitor-login/visitor-login';

    this.http
      .post(onlineVisitorLoginApiUrl, { email: this.username, idNumber: this.password })
      .subscribe(
        (response: any) => {
          // Handle successful response
          console.log('Online visitor logged in:', response);
          this.router.navigate(['/onlineVisitor-booking']);
        },
        (error) => {
          // Handle error response
          console.error('Online visitor login failed:', error);
          alert('Invalid email or ID number. Please try again.');
          this.errorMessage = 'Invalid email or password.';
        }
      );
  }

  receptionistLogin() {
    const receptionistLoginApiUrl = 'http://localhost:8080/receptionist/login';

    this.http
      .post(receptionistLoginApiUrl, { username: this.username, password: this.password })
      .subscribe(
        (response: any) => {
          // Handle successful response
          console.log('Receptionist logged in:', response);
          this.router.navigate(['/dashBoard']);
        },
        (error) => {
          // Handle error response
          console.error('Receptionist login failed:', error);
          alert('Invalid username or password. Please try again.');
          this.errorMessage = 'Invalid Username or password.';
        }
      );
  }













}
