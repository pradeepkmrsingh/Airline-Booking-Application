import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { LogindataService } from 'src/app/service/logindata.service';
import { Router } from '@angular/router';
import { IProfile } from 'src/app/model/IProfile';
import { HeadernameService } from 'src/app/service/headername.service';
import { Subject } from 'rxjs';
const subject=new Subject<any>();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: '';
  email1: string;
  pass: string;
  pass1 = '';
  loginItem: IProfile[];
  flag = 0;
  access = false;
  username: string;
  password: string;

  constructor(private router: Router,
    private loginservice: LogindataService, private headerName: HeadernameService) { }
    
  ngOnInit() {

  }
  
  // tslint:disable-next-line: variable-name
  getRes(email1: string, pass: string) {
    this.loginservice.getloginData().subscribe((d) => {
      this.loginItem = d;
      //console.log(this.loginItem);
      this.loginItem.forEach(c => {
        if (email1 === c.id && c.rights === 'admin') {
        /*  console.log(c.id);
          console.log(email1);
          console.log(c.rights);*/
          if (pass === c.password) {
            //console.log(pass);
            localStorage.setItem('username', c.fullName);
            localStorage.setItem('email', c.id);
            //console.log(localStorage.getItem('username'));
            // location.reload();
           subject.next(localStorage.getItem('username'));
           this.router.navigate(['/adminhome']);
           /*var promise=new Promise(()=>{
            this.router.navigate(['/adminhome']);
           });
            promise.then(()=>{
              location.reload();
            });
           */
          // location.reload();
          } else {
            //console.log("In else");
            localStorage.setItem('username', 'Login or Signup');
            this.router.navigate(['/login']);
            alert('please enter correct password/ email');
          }
        } else {
          if (email1 === c.id && c.rights === 'user') {

            if (pass === c.password) {
              localStorage.setItem('username', c.fullName);
              localStorage.setItem('email', c.id);
             subject.next(localStorage.getItem('username'));
             this.router.navigate(['/']);
             /*var promise=new Promise(()=>{
              this.router.navigate(['/']);
             });
              promise.then(()=>{
                location.reload();
              });
              */
            } else {
              //console.log("In else");
              localStorage.setItem('username', 'Login or Signup');
              this.router.navigate(['/login']);
              alert('please enter correct password');
            }
          }
        }
      }
      );
    });
  }
  getDisableStatus(email1: string, pass: string) {
    if (email1.includes('@') && pass !== '') {
      return false;
    }
    return true;
  }

  funcUserName(name: string) {
   // console.log(name);
  }

}
export default subject;