import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
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
  imports: [FormsModule, NgIf],
  templateUrl: './search-visitor.component.html',
  styleUrls: ['./search-visitor.component.css'],
})
export class SearchVisitorComponent {
  fullName: string = '';
  visitor: Visitor | null = null;

  constructor(private http: HttpClient) {}

  searchVisitor(): void {
    if (!this.fullName.trim()) {
      window.alert('Please enter a visitor name to search.');
      return;
    }

    this.http.get<Visitor>(`http://localhost:8080/visitor/searchByName/${this.fullName}`).subscribe({
      next: (data) => {
        this.visitor = data; // Populate visitor details
      },
      error: () => {
        this.visitor = null; // Clear previous visitor data
        window.alert('This visitor is not in our database.'); // Show alert
      },
    });
  }
}
