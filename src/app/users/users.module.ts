import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {ReactiveFormsModule} from '@angular/forms'
import { AppSharedModule } from '../app-shared/app-shared.module';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component'

const routes: Routes =[
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent}
]

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppSharedModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports:[RegisterComponent]
})
export class UsersModule { }
