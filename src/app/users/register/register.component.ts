import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms'
import {ForbiddenNamesValidator} from '../../app-shared/ForbiddenNamesValidator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerFormGroup = new FormGroup({
      userName: new FormControl("",[Validators.required,Validators.minLength(3), ForbiddenNamesValidator(["admin","manager"])]),
      passWord: new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z]{4,}")]),
      email: new FormControl("",[Validators.required,Validators.email]),
      contactNo: new FormControl("")
    })
  }

  register(){
    if(this.registerFormGroup.valid){
      alert("Valid Form");
    }else{
      alert("Form is invalid")
    }
  }

}
