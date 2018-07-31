import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersListComponent } from './customers-list/customers.list.component';
import { CustomerDetailsComponent } from './customer-details/customer.details.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersListComponent
  },
  {
    path: 'about',
    component: CustomerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CustomerAppRoutingModule { }
