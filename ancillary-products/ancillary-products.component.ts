import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { AncillaryModel } from './ancillary-products.model';

@Component({
  selector: 'app-ancillary-products',
  templateUrl: './ancillary-products.component.html',
  styleUrls: ['./ancillary-products.component.css']
})
export class AncillaryProductsComponent implements OnInit {
  cityData !: any;
  loginData !:any;
  RegData !:any;
  selected : any;
  userModelObj : AncillaryModel = new AncillaryModel();
  constructor(private formbuilder : FormBuilder,private api : ApiService,private http:HttpClient) { }

  ngOnInit(): void {
    this.api.getTechnologies()
    .subscribe(res=>{
      this.cityData=res;
    })
    this.api.getReg()
    .subscribe(res=>{
      this.RegData=res;
    })
    this.api.getLogin()
    .subscribe(res=>{
      this.loginData=res;
    })
  }

  getAllCities()
  {
    this.api.getTechnologies()
    .subscribe(res=>{
      this.cityData=res;
    })
  }
  bookTechnologies(companies : any,city:any)
  {
    for(let i=0;i<this.RegData.length;i++)
    {
       if(this.RegData[i].email==this.loginData[this.loginData.length-1].email && this.RegData[i].password==this.loginData[this.loginData.length-1].password)
       {
        this.userModelObj.CustomerName = this.RegData[i].fullname;
        this.userModelObj.email=this.RegData[i].email;
        this.userModelObj.phone=this.RegData[i].mobile;
       }
    }
    this.userModelObj.CityName=city;
    this.userModelObj.HotelName=companies;

    this.api.postTechnologiesDetails(this.userModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Booked successfully");
    },err=>{
      alert("something went wrong");
    })
  }
}


  