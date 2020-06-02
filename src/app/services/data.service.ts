import { Injectable, Inject } from '@angular/core';

// Import Behavior Subject to pass data between components not connected to each other
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class DataService {

    private messageSource = new BehaviorSubject({});
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message: any) {
        this.messageSource.next(message); 
    }

}