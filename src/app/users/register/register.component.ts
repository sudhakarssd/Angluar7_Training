import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms'
import {ForbiddenNamesValidator} from '../../app-shared/ForbiddenNamesValidator'
import { CheckUniqueNameValidator } from 'src/app/app-shared/CheckUniqueNameValidator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup: FormGroup;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.registerFormGroup = new FormGroup({
      userName: new FormControl("",[Validators.required,
                                    Validators.minLength(3), 
                                    ForbiddenNamesValidator(["admin","manager"])],
                                    [CheckUniqueNameValidator(this.http)]),
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
