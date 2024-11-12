// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms'
// import { ApiService } from '../Shared/api.service';
// import { userModel } from './userDashboardModel';
// @Component({
//   selector: 'app-userdashboard',
//   templateUrl: './userdashboard.component.html',
//   styleUrls: ['./userdashboard.component.css']
// })

// export class UserdashboardComponent implements OnInit {

//   cityData !: any;
//   loginData !: any;
//   RegData !: any;
//   selected: any;
//   userModelObj: userModel = new userModel();
//   //immediatejoinerData: any;
//   constructor(private formbuilder: FormBuilder, private api: ApiService, private http: HttpClient) { }

//   ngOnInit(): void {
//     this.api.getF()
//       .subscribe(res => {
//         this.cityData = res;
//       })
//     this.api.getReg()
//       .subscribe(res => {
//         this.RegData = res;
//       })
//     this.api.getLogin()
//       .subscribe(res => {
//         this.loginData = res;
//       })
//   }

//   getAllCities() {
//     this.api.getF()
//       .subscribe(res => {
//         this.cityData = res;
//       })
//   }
//   applythejob(Technologies: any, CompanyName: any, City: any, Experience: any, immediatejoiner: any) {
//     for (let i = 0; i < this.RegData.length; i++) {
//       if (this.RegData[i].email == this.loginData[this.loginData.length - 1].email && this.RegData[i].password == this.loginData[this.loginData.length - 1].password) {
//         this.userModelObj.CustomerName = this.RegData[i].fullname;
//         this.userModelObj.email = this.RegData[i].email;
//         this.userModelObj.phone = this.RegData[i].mobile;
//         this.userModelObj.Experience = this.RegData[i].Experience;
//         this.userModelObj.Technologies = this.RegData[i].Technologies;
//         this.userModelObj.immediatejoiner = this.RegData[i].immediatejoiner;
//       }
//     }
//     this.userModelObj.CityName = City;
//     this.userModelObj.CompanyName = CompanyName;
//     this.userModelObj.Technologies = Technologies;
//     this.userModelObj.Experience = Experience;
//     this.userModelObj.immediatejoiner =immediatejoiner;


//     this.api.postapplythejobDetails(this.userModelObj)
//       .subscribe(res => {
//         console.log(res);
//         alert("Profile successfully");
//       }, err => {
//         alert("something went wrong");
//       })
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';
import { userModel } from './userDashboardModel';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  cityData: any[] = [];
  loginData !: any;
  RegData !: any;
  filteredCityData: any[] = [];
  searchSkills: string = '';
  searchLocation: string = '';
  searchExperience: string = '';
  searchAttempted: boolean = false;
  userModelObj: userModel = new userModel();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getF().subscribe(res => {
      this.cityData = res;
      console.log('City Data:', this.cityData); // Log city data
    });
  
    this.api.getLogin().subscribe(res => {
      this.loginData = res;
      console.log('Login Data:', this.loginData); // Log login data
    });
  
    this.api.getReg().subscribe(res => {
      this.RegData = res;
      console.log('Registration Data:', this.RegData); // Log registration data
    });
  }

  searchJobs() {
    this.searchAttempted = true;
    this.filteredCityData = this.cityData.filter(job =>
      job.Technologies?.toLowerCase().includes(this.searchSkills.toLowerCase()) &&
      job.CityName?.toLowerCase().includes(this.searchLocation.toLowerCase()) &&
      job.Experience?.includes(this.searchExperience)
    );
    console.log('Filtered City Data:', this.filteredCityData); // Log filtered data
  }

  applythejob(Technologies: any, CompanyName: any, City: any, Experience: any, immediatejoiner: any) {
    console.log('Apply Job clicked with:', Technologies, CompanyName, City, Experience, immediatejoiner);
  
    for (let i = 0; i < this.RegData.length; i++) {
      if (this.RegData[i].email === this.loginData[this.loginData.length - 1].email && 
          this.RegData[i].password === this.loginData[this.loginData.length - 1].password) {
        this.userModelObj.CustomerName = this.RegData[i].fullname;
        this.userModelObj.email = this.RegData[i].email;
        this.userModelObj.phone = this.RegData[i].mobile;
        this.userModelObj.Experience = this.RegData[i].Experience;
        this.userModelObj.Technologies = this.RegData[i].Technologies;
        this.userModelObj.immediatejoiner = this.RegData[i].immediatejoiner;
        console.log('User Model Obj:', this.userModelObj);
      }
    }
  
    this.userModelObj.CityName = City;
    this.userModelObj.CompanyName = CompanyName;
    this.userModelObj.Technologies = Technologies;
    this.userModelObj.Experience = Experience;
    this.userModelObj.immediatejoiner = immediatejoiner;
  
    this.api.postapplythejobDetails(this.userModelObj).subscribe(
      res => {
        console.log('API Response:', res);
        alert("Profile successfully applied");
      },
      err => {
        console.error('API Error:', err);
        alert("Something went wrong");
      }
    );
  }
}

