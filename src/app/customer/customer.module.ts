import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { CustFilterPipe } from './cust-filter.pipe';
import { DataService } from './services/data-service';
import { MockDataService } from './services/mock-data.service';
import { CustomerDataService} from './services/customer-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListComponent, EditComponent, CustFilterPipe],
  //imports will always be modules
  imports: [
    CommonModule,FormsModule, HttpClientModule
  ],
  //Only components,pipes except module
  //To use component of one module to another module 
  exports:[ListComponent],
  providers:[{provide: DataService, useClass: CustomerDataService}]
})
export class CustomerModule { }
