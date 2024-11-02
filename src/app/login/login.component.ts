import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Shared/api.service';
import { loginModel } from './loginModel';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loginForm!: FormGroup;

 loginObj:loginModel=new loginModel();
  constructor(private formBuilder : FormBuilder,private http:HttpClient,private router : Router,private api : ApiService) { }
  ngOnInit(): void {
    this.loginForm= this.formBuilder.group({
      email: [null, Validators.compose([Validators.required] )],
      password:[null, Validators.compose([Validators.required])],
    })
  }  

login()
{
  this.http.get<any>("http://localhost:3000/signupUsers")
  .subscribe(res=>{
    const user=res.find((a:any)=>{
     return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
    });
    if(user)
    {
      alert("Login Success");
      this.loginObj.email=this.loginForm.value.email;
      this.loginObj.password=this.loginForm.value.password;
      this.api.postLogin(this.loginObj)
      .subscribe(res=>{
        console.log(res);
       // alert("Booked successfully");
       
      },err=>{
        alert("something went wrong");
      })
      this.loginForm.reset();
      this.router.navigate(['userDashborad']);
    }
    else{
      alert("User not found");
    }
  },err=>{
    alert("Something went wrong");
  })
}
   
};
