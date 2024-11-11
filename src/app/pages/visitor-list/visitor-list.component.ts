import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-visitor-list',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './visitor-list.component.html',
  styleUrl: './visitor-list.component.css'
})
export class VisitorListComponent {

  public visitorList:any = [];

  constructor(private http : HttpClient){
    this.loadTable();
  }

  loadTable(){
    this.http.get("http://localhost:8080/visitor/getAll-visitors").subscribe(data=>{
      console.log(data);
      this.visitorList=data;
    })
  }


}
