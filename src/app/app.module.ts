import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header.component';
import { DataBindingComponent } from './data-binding.component';
import { CustomerModule } from './customer/customer.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, HelloComponent,HeaderComponent,DataBindingComponent, RxjsComponent
  ],
  imports: [
    BrowserModule,FormsModule,CustomerModule,ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  //bootstrap: [AppComponent,HelloComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
