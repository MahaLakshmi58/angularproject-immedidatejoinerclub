import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-ancillary-history',
  templateUrl: './login-ancillary-history.component.html',
  styleUrls: ['./login-ancillary-history.component.css']
})
export class LoginAncillaryHistoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(loginForm: any) {
    if(loginForm.value.password=="abc@06" && loginForm.value.email=="admin@gmail.com")
    {
      alert("Login Success");
      this.router.navigate(['ancillary-bookings'])
    }
    else{
      alert("Invalid details");
    }
      loginForm.reset();
     }
  
  }

