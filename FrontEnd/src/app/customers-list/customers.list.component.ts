import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../shared/entitymodels/customer';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-customers-list',
    templateUrl: './customers.list.component.html',
    styleUrls: ['./customers.list.component.sass']
})

export class CustomersListComponent implements OnInit {

    customerList: any;

    constructor(private customerData: CustomerService) {
        this.customerData.getCustomers().subscribe(res => { this.customerList = res; });
    }

    ngOnInit() {

    }



}
