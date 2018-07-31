import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { CustomerService } from '../services/customer.service'
import { Customer } from '../shared/entitymodels/customer';

@Component({
    selector: 'app-customer.details',
    templateUrl: './customer.details.component.html',
    styleUrls: ['./customer.details.component.sass'] 
})
export class CustomerDetailsComponent implements OnInit {

    customer: Customer =
    {
        firstName: null,
        lastName: null,
        gender: null,
        mobile: null,
    };

    @ViewChild('customerForm') customerForm: NgForm;

    constructor(private router: Router
        , private customerData: CustomerService) {
    }

    ngOnInit() {
    }

    submit() {
        this.customerData.insertCustomer(this.customer)
            .subscribe((insertedCustomer: any) => {
                if (insertedCustomer) {
                    console.log('Unable to add customer');
                } else {
                    this.router.navigate(['']);
                }
            },
            (err: any) =>
                console.log(err)
            );
    }

    cancel(event: Event) {
        event.preventDefault();
        this.router.navigate(['']);
    }

}
