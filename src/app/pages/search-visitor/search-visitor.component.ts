import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
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
  selector: 'app-search-visitor',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './search-visitor.component.html',
  styleUrl: './search-visitor.component.css'
})
export class SearchVisitorComponent {

  fullName: string = '';

  visitor: Visitor | null = null;
  
  errorMessage: string | null = null;


  constructor(private http: HttpClient) {}

  searchVisitor(): void {
    this.http.get<Visitor>(`http://localhost:8080/visitor/searchByName/${this.fullName}`).subscribe({
      next: (data) => {
        this.visitor = data;
        this.errorMessage = null; // Clear any previous error
      },
      error: () => {
        this.errorMessage = 'Visitor not found';
        this.visitor = null; // Clear previous visitor data
      }
    });
  }

  










}
