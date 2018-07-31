import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Customer } from '../shared/entitymodels/customer';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8'
    })
};

@Injectable()
export class CustomerService {

    customerBaseUrl = 'http://localhost:60485/api/Customer/';
    customerMockUrl = 'assets\\mockresponses\\customerDetails.json';
   
   
  constructor(private http: HttpClient) { 
      
  }

    getCustomers(){
        return this.http.get<Customer[]>(this.customerBaseUrl +'GetCustomers')
                            .pipe(catchError(this.handleError));
    } 

    insertCustomer(customer: Customer){
        return this.http.post<boolean>(this.customerBaseUrl +'AddCustomer', customer, httpOptions)
            .pipe(catchError(this.handleError));
    }
    
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log('An error occurred:' + error.error.message);
        } else {
            console.log(`Backend returned code ${error.status}`);
        }
        return throwError(
            'Error occurred; please try again later.');
    };
}