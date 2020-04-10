import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService,public router:Router,private route : ActivatedRoute ) { }
  res:any;
  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.res = params.get("res");
      console.log(this.res);
      this.authService.string_set(this.res);
    })
  }

  trylogin() {
    this.authService.doGoogleLogin();
    this.router.navigate(['/login']);
  }
  login(){
    this.authService.anonymousLogin();
    this.router.navigate(['/user']);
  } 
  

}
