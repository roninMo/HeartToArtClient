import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

// imports to interact with the Api
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
// Pass in the data to relay to the search results component
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches)
  //   );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private fb:FormBuilder, 
    private apiService : ApiService,
    private data: DataService
  ) { }

  songSearch: FormGroup;
  // Array to pass in the search results, we'll pass it to the behavior subject after the data's returned
  searchRes: any; 
  ngOnInit() {
    this.songSearch = this.fb.group({
      songSearch: new FormControl(),
    })
    this.data.currentMessage.subscribe(passDataInto => this.searchRes = passDataInto);

  }


  searchSubmit() { // On submit of user song search data
    // Enter form data into the searchFetch
    console.log('searchSubmit Form data: ', this.songSearch.value);
    this.searchFetch(this.songSearch.value);

    // Reset the form so it has no input
    this.songSearch.reset();  
  }


  /******     Functions      ******/
  searchFetch(userData: any) { // Reaching out to the apiService for data
    console.log('userData received in fetch function: ', userData);

    this.apiService.songSearch(userData)
    .subscribe(serverSongs => {
      console.log('Server response', serverSongs);
      this.searchRes = serverSongs;
      this.data.changeMessage(this.searchRes) // passing it to fetch db service Component
      this.router.navigate(['/app-search-results']);
      
    });
  }


  logout() {
    localStorage.setItem('token', '');
    this.router.navigate(['app-login']);

  }
}
