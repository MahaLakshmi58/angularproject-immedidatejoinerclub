import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';

@Component({
  selector: 'app-managerdashboard',
  templateUrl: './managerdashboard.component.html',
  styleUrls: ['./managerdashboard.component.css']
})
export class ManagerdashboardComponent implements OnInit {
applyJob: any;
  constructor(private api : ApiService,private http:HttpClient) {
    this.api.getapplyJob()
    .subscribe(data=>{
      this.applyJob=data;
    })
   }

  ngOnInit(): void {
  }

}
