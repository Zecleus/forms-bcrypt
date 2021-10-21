import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  toCompanyName = "";
  toPositionName = "";
  toSalary = 0;
  toCityAddress = "";
  toContactNumber = 0;

  check = false;

 jobForm = this.fb.group({
   companyName: [
     '',
     {
       validators: [Validators.required, Validators.minLength(6)],
     }
   ],
   positionName: [
     '',
     {
       validators: [Validators.required, Validators.minLength(6)],
     }
   ],
   salary: [
      '',
      {
        validators: [Validators.required, Validators.minLength(3)],
      }
   ],
   cityAddress:[
     '',
     {
       validators: [Validators.required, Validators.minLength(6)],
     }
   ],
   contactNumber: [
     '',
     {
       validators: [Validators.required, Validators.minLength(11)],
     }
   ]
 })

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
      this.toCompanyName = this.jobForm.controls['companyName'].value;
      this.toPositionName = this.jobForm.controls['positionName'].value;
      this.toSalary = this.jobForm.controls['salary'].value;
      this.toCityAddress = this.jobForm.controls['cityAddress'].value;
      this.toContactNumber = this.jobForm.controls['contactNumber'].value;
      this.check = true;
  }

  get companyName(){
    return this.jobForm.controls['companyName'];
  }

  get positionName(){
    return this.jobForm.controls['positionName'];
  }

  get salary(){
    return this.jobForm.controls['salary'];
  }

  get cityAddress(){
    return this.jobForm.controls['cityAddress'];
  }

  get contactNumber(){
    return this.jobForm.controls['contactNumber'];
  }

  get valid(){
    return this.jobForm.controls;
  }

}
