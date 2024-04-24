import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  employeeForm!:FormGroup
myDate =Date;
show:any;
id:any
IdRecord: any;
  constructor(private fb:FormBuilder,public apicall:ApicallService,public router : Router){}

  ngOnInit(){
    this.IdRecord=this.apicall.IdRecord;
console.log(this.IdRecord,this.IdRecord);
this.id=this.apicall.id;
this.show=this.apicall.show;

this.employeeForm=this.fb.group({
  name: [this.IdRecord?this.IdRecord[0].name:'', [Validators.required,Validators.maxLength(16), Validators.pattern('[a-zA-Z ]*')]],
  email:[ this.IdRecord ? this.IdRecord[0]?.email:'', [Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
  dob:[ this.IdRecord ? this.IdRecord[0]?.dob:'',Validators.required],
  country:[ this.IdRecord ? this.IdRecord[0]?.country:'',Validators.required],
  avatar:[ this.IdRecord ? this.IdRecord[0]?.avatar:'',Validators.required]
})


  }

  submit(){
  this.apicall.postApiCall(this.employeeForm.value).subscribe(ele=>{
 console.log(ele);
 if (ele) {
  alert("Data Submited Sucessfulyy..!!")
 }
  })
   
    
  }

  reset(){
    this.router.navigateByUrl("");
  }

  update(){
    this.apicall.patchApi(this.id,this.employeeForm.value).subscribe((responce:any)=>{
     if(responce){ 
       alert('Update  Successfuly...!!');
     this.router.navigateByUrl("");
     }
     })
 
  
}

ngOnDestroy(){
  console.log("destroy");
  
  this.apicall.IdRecord='';
  this.id=''
  
}
}