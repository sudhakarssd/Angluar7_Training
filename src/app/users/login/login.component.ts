import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;
  message:string = "Hello World";

  constructor(private activatedRoute: ActivatedRoute, private router:Router
              ,private http: HttpClient) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl("",[Validators.required]),
      password: new FormControl("",[Validators.required])
    });
  }

  login(){
    if(this.formGroup.valid){
      const userName = this.formGroup.get("username").value;
      const password = this.formGroup.get("password").value;

      const headers = new HttpHeaders()
                          .set("username",userName)
                          .set("password",password);
      
      this.http.post<{auth: boolean, token:string}>(environment.login_api_url, null,{headers:headers})
        .subscribe(result =>{
            sessionStorage.setItem("AUTH_TOKEN", result.token);
            let returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];
            console.log(returnUrl, this.activatedRoute.snapshot.queryParams);
            if(!returnUrl){
              returnUrl = "/home";
            }
            console.log(returnUrl);
            this.router.navigate([returnUrl]);
        },()=>{ 
            alert("Invalid credentials")
        });



      // if(userName === "admin" && password==="admin"){

      //   sessionStorage.setItem("AUTH_TOKEN",userName);
      //   //If we don't want observe we can use snapshot to read
      //   let returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];

      //   if(!returnUrl){
      //     returnUrl = "/home";
      //   }
      //   console.log(returnUrl);
      //   this.router.navigate([returnUrl]);
      // }
      // else{
      //   alert("invalid credentials");
      // }      
    }
    else{
      alert("Invalid Form");
    }
  }

  change(){
    this.message = "<h2>This is changed message</h2>"
  }

}
