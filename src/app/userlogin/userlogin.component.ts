import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public loginForm:FormGroup;

constructor(private apiservice:ApiService,
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router
    ) { }

  ngOnInit(): void {


    this.loginForm = this.formBuilder.group({
      EmailId:[''],
      Password:['']
    })

  }

  login(){

    this.http.get<any>("http://localhost:3402/api/Register/getRegister")
    .subscribe(res=>{
      const token = res.find((a:any)=>{
        return a.EmailId === this.loginForm.value.EmailId && a.Password === this.loginForm.value.Password
      });
      if (token){
        localStorage.setItem('token',token.EmailId)
        alert ("Login Success!!");
        this.loginForm.reset();
        this.router.navigate(['home'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong!!")
    })
  }

}


