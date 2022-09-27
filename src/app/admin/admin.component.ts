import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminlogin:FormGroup;
  constructor(private http:HttpClient,private router:Router,public apiservice:ApiService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.adminlogin = this.formBuilder.group({
      EmailId:[''],
      Password:['']
    })
  }
  
  admin(){

    this.http.get<any>("http://localhost:3402/api/Admin/getAdmin")
    .subscribe(res=>{
      const token = res.find((a:any)=>{
        return a.EmailId === this.adminlogin.value.EmailId && a.Password === this.adminlogin.value.Password
      });
      if (token){
        alert ("Login Success!!");
        this.adminlogin.reset();
        this.router.navigate(['addvendor'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong!!")
    })
  }
}
