import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactFormComponent } from './contactform.component';

import { ContactService } from './contact.service';

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        //BrowserAnimationsModule is needed for the toastr module
        BrowserAnimationsModule
    ],
    declarations: [
        ContactFormComponent
    ],
    providers: [
        ContactService
    ],
    exports: [ContactFormComponent]
})
export class ContactModule { }