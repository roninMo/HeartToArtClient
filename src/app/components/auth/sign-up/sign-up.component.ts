import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { AuthGuardService } from '../guard/auth-guard.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signup: FormGroup;
  signupArr = [];

  constructor(
    private fb:FormBuilder, 
    private httpClient: HttpClient, 
    private apiService : ApiService,
    private authGuard : AuthGuardService,
    public router: Router
    ) { }

  ngOnInit() {
    this.signup = this.fb.group({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onClickSubmit() {
    this.signupArr = this.signup.value;
    console.log('User input: ', this.signupArr);

    // Pass data into api service into a login function we'll create below
    this.postLogin(this.signupArr);

    // Reset the form so it has no input
    this.signup.reset()

  }

  postLogin(userPass: any) {
    console.log(userPass);
    
    this.apiService.signup(userPass)
    .subscribe(credentials => {
      console.log('user credentials', credentials); 
      localStorage.setItem('token', credentials.token); // Store the token in localStorage for routeGuards
      this.router.navigate(['app-landing-page']);
    });




  }
  

}
