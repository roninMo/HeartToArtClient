import { Component, OnInit } from '@angular/core';

import { ContactService } from './contact.service';
import { Contact } from './Models/contact.model';


@Component({
    selector: 'contactform',
    templateUrl: './contactform.component.html',
    host: { 'class': 'row' }

})
export class ContactFormComponent implements OnInit {
    
    contact: Contact = new Contact();
    loading = true;

    // , private toastr: ToastrService
    
    constructor(private contactService: ContactService ) {}

    ngOnInit() {
        this.loading = false;
    }

    onSubmit() {
        this.loading = true;
        //Don't forget to subscribe on an observable, or it will never be called.
        this.contactService.sendMail(this.contact).subscribe(
            () => {
                //Success
                this.contact = new Contact();
                this.loading = false;
     
            },
            () => {
                //Failed
                this.loading = false;                

            }
        );
    }
}