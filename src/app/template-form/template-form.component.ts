import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as bcrypt from 'bcryptjs';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  toFirstName =  "";
  toLastName =  "";
  toAge = 0 ;
  toEmail = "";
  toPassword = "";
  check = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm){

      const salt = bcrypt.genSaltSync(10);
      
      this.toFirstName = loginForm.value.firstName;
      this.toLastName = loginForm.value.lastName;
      this.toAge = loginForm.value.age;
      this.toEmail = loginForm.value.email;
      this.toPassword = bcrypt.hashSync(loginForm.value.password, salt);
      this.check = true;
  }

}
