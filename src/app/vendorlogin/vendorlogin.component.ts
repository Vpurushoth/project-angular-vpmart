import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {


public vendorlogin:FormGroup;

constructor(private apiservice:ApiService,
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.vendorlogin = this.formBuilder.group({
      EmailId:[''],
      Password:['']
    })

  }

  login(){

    this.http.get<any>("http://localhost:3402/api/Vendor/getVendor")
    .subscribe(res=>{
      const token = res.find((a:any)=>{
        return a.EmailId === this.vendorlogin.value.EmailID && a.Password === this.vendorlogin.value.Pass
      });
      if (token){
        localStorage.setItem('token',token.EmailID)
        alert ("Login Success!!");
        this.vendorlogin.reset();
        this.router.navigate(['products'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong!!")
    })
  }
}
