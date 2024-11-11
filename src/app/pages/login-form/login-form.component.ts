import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [NgIf,FormsModule,],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  loginUser() {
    const loginPayload = { username: this.username, password: this.password };

    // Send the login request
    this.http.post<boolean>('http://localhost:8080/receptionist/login', loginPayload).subscribe(
      (isValid) => {
        if (isValid) {
          
          alert('Login successful!');

          this.router.navigate(['/dashBoard']);
        } else {
         
          this.errorMessage = 'Invalid email or password.';
        }
      },
      (error) => {
        console.error('Error during login:', error);
        this.errorMessage = 'An error occurred during login. Please try again later.';
      }
    );
  }

}
