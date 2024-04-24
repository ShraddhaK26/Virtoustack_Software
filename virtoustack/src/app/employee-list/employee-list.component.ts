import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {

 employeeData:any=[];
 searchText:any;
  constructor(public apicall:ApicallService,public router:Router){}

ngOnInit(){
this.getData();
}

getData(){
  this.apicall.getApiCall().subscribe(ele=>{
    console.log(ele);
    this.employeeData=ele
  })
}
edit(id:any){
  let IdRecord:any= [];
  console.log("id" ,id);
  this.employeeData.forEach((item:any) => {
    if(item.id == id){
      IdRecord.push(item)
    }
  })
  console.log("record",IdRecord);
  this.apicall.IdRecord=IdRecord;
  this.apicall.id=id;
  this.router.navigateByUrl('employeeForm');
  
  
  
      }
}
