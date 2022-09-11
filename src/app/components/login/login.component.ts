import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email:any;
  password:any;
  formdata:any;
  
  constructor(private httpservice: HttpService, private router: Router) { }
  ngOnInit() {
    console.log('here')
    this.formdata = new FormGroup({
       email: new FormControl(""),
       password: new FormControl("")
    });
 }

  setEmail(x:any){
    const pattern = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
    if (pattern.test(x.email)){
      this.email = x.email
    }
    else{
      alert("Email not valid")
    }
  }
  setPw(x: any){
    this.password = x
    console.log(this.email, this,this.password)
  }

  onSubmitHandler(){
    this.httpservice.login(this.email, this.password)
    console.log('clicked')
  }

  redirect(){
    this.router.navigate(['/success'])
  }
}
