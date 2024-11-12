import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';


declare var google: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', [Validators.required, Validators.maxLength(10)]],
      resume: ['', Validators.required],
      lastworkingday: ['', Validators.required]
    });

    // Initialize Google Sign-In
    google.accounts.id.initialize({
      client_id: "417316527873-g0jalc02lsskc3a47lgulmf2rusfidpn.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });

    // Render Google Sign-In button
    google.accounts.id.renderButton(
      document.getElementById("g_id_signin"), 
      { 
        theme: "filled_blue", 
        size: "large", 
        text: "signin_with", 
        shape: "pill" 
      }
    );
  }

  signUp() {
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value).subscribe(
      res => {
        alert("Signup SuccessFull");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      err => {
        alert("Something went wrong");
      }
    );
  }

  // Callback function for Google Sign-In
  handleCredentialResponse(response: any) {
    console.log("Google sign-in response: ", response);
    const user = jwt_decode(response.credential); // You will need to decode the token here
    console.log(user); // You can now access user information such as name, email, etc.

    // You can now send the user data to your backend for registration/login
    this.http.post<any>("http://localhost:3000/signupUsers", user).subscribe(
      res => {
        alert("Signup Successful");
        this.router.navigate(['login']);
      },
      err => {
        alert("Something went wrong");
      }
    );
  }
}

function jwt_decode(credential: any) {
  throw new Error('Function not implemented.');
}
