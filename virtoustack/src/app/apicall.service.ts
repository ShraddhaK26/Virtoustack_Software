import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
 url='http://localhost:3000/data'
  IdRecord: any;
  id: any;
  show: boolean =false;
  constructor(private http:HttpClient) { }


  postApiCall(FormData:any){
  return this.http.post(this.url,FormData)
  }

  getApiCall(){
    return this.http.get(this.url)
  }

  patchApi(id:any,body:any){
    let url=this.url+'/'+id
     return this.http.patch(url,body)
   }
}
