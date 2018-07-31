import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerAppRoutingModule } from './customerapp-routing.module';

import { CustomerAppComponent } from './customerapp.component';
import { CustomersListComponent } from './customers-list/customers.list.component';
import { CustomerDetailsComponent } from './customer-details/customer.details.component';
import { CustomerService } from './services/customer.service'
import { HttpClientModule } from '@angular/common/http';


@NgModule({ 
  declarations: [ 
    CustomerAppComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CustomerAppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [CustomerAppComponent]
})
export class CustomerAppModule { }
