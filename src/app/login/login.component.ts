import { Component, OnInit } from '@angular/core';

import { AuthService} from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public as :AuthService ,private route:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.as.loggedOut().then( v=>{
      console.log(v);
    })
    this.route.navigate(['/register']);
  }

  

}
