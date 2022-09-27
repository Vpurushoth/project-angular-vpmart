import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ApiService {




  nodeApiUrl="http://localhost:3402/api/Products/";

  nodeApi1Url="http://localhost:3402/api/Register/";

  nodeApi2Url="http://localhost:3402/api/Vendor/";

  serviceproperty="Service Created";

  handleError:any="Getting Error from Apicall";
  selectedProducts: any;
  

  


  constructor(private http : HttpClient,private router:Router) { }

  
  //------------------------------------------------------------------------------------------------------------------------

  AddProducts(Products:any):Observable<any>{
  
    const header={headers:new HttpHeaders({'content-type':'application/json'})};

  return this.http.post<any>(this.nodeApiUrl+'create',Products,header);
  }

    GetProducts(){
      return this.http.get<any>(this.nodeApiUrl+'getProduts');
    }

  deleteProducts(id:any){
    const options = { headers: new HttpHeaders({'content-type':'application/json'}),
  body: { _id: id} 
  };
    return this.http.delete<any>(this.nodeApiUrl+'delete',options);
  }
  
  UpdateProducts(data :any,id:number){
    return this.http.post<any>("http://localhost:3402/api/Products/update",data)
    .pipe(map((res:any)=>{return res;}))
  }

  

  GetProductsfromprojectApi(){
    return this.http.get<any>(this.nodeApiUrl+'getProducts');
  } 
//---------------------------------------------------------------------------------------------------------------------
AddRegister(Register:any):Observable<any>{
  
  const header={headers:new HttpHeaders({'content-type':'application/json'})};
return this.http.post<any>(this.nodeApi1Url+'create',Register,header);
}

GetRegister(){
  return this.http.get<any>(this.nodeApi1Url+'getRegister');
}

DeleteRegister(Id:any){
  const options = { headers: new HttpHeaders({'content-type':'application/json'}),
body: { _id: Id} 
};
  return this.http.delete<any>(this.nodeApi1Url+'delete',options);
}



GetRegisterfromprojectAPI(){
  return this.http.get<any>(this.nodeApi1Url+'getVendor');

}

//---------------------------------------------------------------------------------------------------------------------
AddVendor(Vendor:any):Observable<any>{
  
  const header={headers:new HttpHeaders({'content-type':'application/json'})};
return this.http.post<any>(this.nodeApi2Url+'create',Vendor,header);
}

GetVendor(){
  return this.http.get<any>(this.nodeApi2Url+'getVendor');
}

DeleteVendor(Id:any){
  const options = { headers: new HttpHeaders({'content-type':'application/json'}),
body: { _id: Id} 
};
  return this.http.delete<any>(this.nodeApi2Url+'delete',options);
}

UpdateVendor(data :any,Id:any){
  debugger;
  const header={headers:new HttpHeaders({'Content-Type':'application/json'})};
  return this.http.post<any>(this.nodeApi2Url+'update',data,header);
};

GetVendorfromprojectAPI(){
  return this.http.get<any>(this.nodeApi2Url+'getVendor');

}

//---------------------------------------------------------------------------------------------------------------------------------



  GetAdmin(){
    return this.http.get<any>("http://localhost:3402/api/Admin/getAdmin");
  }
}
//---------------------------------------------------------------------------------------------------------------------------------
 