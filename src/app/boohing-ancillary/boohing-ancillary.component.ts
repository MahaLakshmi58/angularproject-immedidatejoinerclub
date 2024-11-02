import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boohing-ancillary',
  templateUrl: './boohing-ancillary.component.html',
  styleUrls: ['./boohing-ancillary.component.css']
})
export class BoohingAncillaryComponent implements OnInit {

  
  bookedHotel: any;
  constructor(private api : ApiService,private http:HttpClient) {
    this.api.getapplycompanies()
    .subscribe(res=>{
      this.bookedHotel=res;
    })
   }

  ngOnInit(): void {
  }

}

  