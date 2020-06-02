import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Database interaction and info
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
 searchResults: any;
 idSearchReturn: any;

  constructor(
    private router: Router,
    private data: DataService,
    private apiService : ApiService,
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(passDataInto => this.searchResults = passDataInto);
    console.log('Search Results data!');
    console.log(this.searchResults);

    // Figuring out how to parse to display data
    // console.log('Square bracket parse with quotes!');
    // console.log(this.searchResults[0]['albums']);

    // console.log('Square bracket parse with deeper parse!');
    // console.log(this.searchResults[0]['albums'][0]['songs'][0]);


    // console.log(this.searchResults[0]['albums'][0]['songs'][0]['songName']);
    // console.log(this.searchResults[0]['artistName']);
    // console.log(this.searchResults[0]['albums'][0]['albumName'])
    /* Search Res layout!
      Songname
      Artistname
      Albumname

      *Optional albumCover 
    */
  }

  selectSong(id: any) {
    console.log('This should be the song id!', id);
    // This will pull the id into a function that calls the apiService and routes to that specific
    this.searchId(id)
  }

  searchId(id: any) { 
    this.apiService.songIdSearch(id)  
    .subscribe(song => {
      console.log('api returned song:');
      console.log(song);
      this.idSearchReturn = song;
      this.data.changeMessage(this.idSearchReturn) // passing it to fetch db service Component
      this.router.navigate(['app-song-detail']);

    });

  }
}
