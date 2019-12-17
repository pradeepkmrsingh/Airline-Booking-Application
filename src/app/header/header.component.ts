import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeadernameService } from '../service/headername.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import subject from '../user/login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName = 'Login or Signup';
  
  email = '';
  private sub: Subscription;
  nm:string
  counter = false;
  counter1 = true;
  logoimg = 'assets/images/paper-plane.png';
  constructor(private headerService: HeadernameService, private router: Router,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
    subject.subscribe((msg)=>{
      
     this.userName=msg;
    if (localStorage.getItem('username') !== null ) {
     
      this.userName = localStorage.getItem('username');
      this.counter=true;
  }
      if(this.userName=="Raunaq")
        this.counter1=false;
})
  }


  /*setUsernameMethod() {
    if (this.userName !== 'Login or Signup') {
      this.counter = true;
    }
    console.log(this.userName);
  }*/

  setEmail(email: string) {
    this.email = email;
  }

  onUserClicked(name: string): void {
  }

  logoutFunc() {
    localStorage.clear();
    this.router.navigate(['/']);
    location.replace("/");
    //location.reload();
  }

  profileView() {
    this.email = localStorage.getItem('email');
    this.router.navigate(['/viewprofile', this.email]);
  }

  adminView() {
    this.router.navigate(['adminhome']);
  }
}
