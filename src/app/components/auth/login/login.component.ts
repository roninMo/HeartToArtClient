import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  loginArr = [];

  constructor(
    private fb:FormBuilder, 
    private apiService : ApiService,
    public router: Router
    ) { }

  ngOnInit() {
    this.login = this.fb.group({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  onClickSubmit() {
    this.loginArr = this.login.value;
    console.log('User input: ', this.loginArr);

    // Pass data into api service into a login function we'll create below
    this.postLogin(this.loginArr);

    // Reset the form so it has no input
    this.login.reset()

  }

  postLogin(userPass: any) {
    console.log(userPass);
    
    this.apiService.login(userPass)
    .subscribe(credentials => {
      console.log('user credentials', credentials); 
      localStorage.setItem('token', credentials.token); // Store the token in localStorage for routeGuards
      this.router.navigate(['/app-landing-page']);
    });
  }
  

}
