import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ancillary-login',
  templateUrl: './ancillary-login.component.html',
  styleUrls: ['./ancillary-login.component.css']
})
export class AncillaryLoginComponent implements OnInit {
 

  constructor(private router:Router) { }

  ngOnInit(): void { }

  login(loginForm: any) {
    if(loginForm.value.password=="maha@06" && loginForm.value.email=="admin@gmail.com")
    {
      alert("Login Success");
      this.router.navigate(['admin-ancillary'])
    }
    else{
      alert("Invalid Details");
    }
      loginForm.reset();
     }
  
  } 
 