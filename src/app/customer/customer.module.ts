import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { CustFilterPipe } from './cust-filter.pipe';
import { DataService } from './services/data-service';
import { CustomerDataService} from './services/customer-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppSharedModule } from '../app-shared/app-shared.module';
import {Routes,RouterModule} from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AuthGuardService } from '../app-shared/auth-guard.service';

const routes: Routes =[
  {path:"customers",component:ListComponent, canActivate:[AuthGuardService]},
  {path:"customers/:id",component: DetailsComponent,canActivate:[AuthGuardService]}
]

@NgModule({
  declarations: [ListComponent, EditComponent, CustFilterPipe, DetailsComponent],
  //imports will always be modules
  imports: [
    CommonModule,FormsModule, HttpClientModule, AppSharedModule,RouterModule.forChild(routes)
  ],
  //Only components,pipes except module
  //To use component of one module to another module 
  //exports:[ListComponent],
  providers:[{provide: DataService, useClass: CustomerDataService}]
})
export class CustomerModule { }
