import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  // testData =  // This is to test how to parse without having to redo the friggin fetch every time!
  //   [
  //     {
  //       "id": "1",
  //       "artistName": "a-ha",
  //       "albums": [ 
  //         {
  //           "id": "20",
  //           "albumName": "Hunting High and Low",
  //           "artistId": "1",
  //           "songs": [
  //             {
  //               "id": "10",
  //               "songName": "Take on Me",
  //               "lyrics": "We're talking away I don't know what I'm to say I'll say it anyway Today's another day to find you Shying away I'll be coming for your love, okay? Take on me (take on me) Take me on (take on me) I'll be gone In a day or two So needless to say I'm odds and ends But I'll be stumbling away Slowly learning that life is okay Say after me It's no better to be safe than sorry Take on me (take on me) Take me on (take on me) I'll be gone In a day or two",
  //               "albumId": "20"
  //             },
  //             {
  //               "id": "11",
  //               "songName": "Train of Thought",
  //               "lyrics": "He likes to have the morning paper's Crossword solved Words go up words come down Forwards backwards twisted round He grabs a pile of letters from a small suitcase Disappears into an office It's another working day And his thoughts are full of strangers Corridors of inked lights And his mind once full of reason Now there's more than meets the eye Oh, a stranger's face he carries with him He likes a bit of reading on the subway home A distant radio whistling tunes that nobody knows At home a house awaits him, He unlocks the door Thinking once there was a sea here But there never was a door And his thoughts are full of strangers And his eyes to numb to see And nothing that he knows of And nowhere where he's been Was ever quite like this And his thoughts And at heart He's full of strangers Dodging on his train of thought Train of thought",
  //               "albumId": "20"
  //             },
  //             {
  //               "id": "12",
  //               "songName": "Hunting High and Low",
  //               "lyrics": "Here I am I'm hunting high and low And now she's telling me she's got to go away I'll always be hunting high and low Hungry for you Watching me tearing myself to pieces Hunting high and low High There's no end to the lengths I'll go to Oh, for you I'll be hunting high and low ~Accidentally ctrl-deleted all the lyrics trying to do this the fast way!",
  //               albumId: "20"
  //             }
  //           ]
  //         },
  //         {
  //           "id": "21",
  //           "albumName": "Stay on These Roads",
  //           "artistId": "1",
  //           "songs": [
  //             {
  //               "id": "13",
  //               "songName": "Safe and Sound",
  //               "lyrics": "I could lift you up I could show you what you want to see And take you where you want to beYou could be my luck Even if the sky is falling down I know that we'll be safe and sound We're safe and sound I could fill your cup You know my river won't evaporate This world we still appreciate You could be my luck Even in a hurricane of frowns I know that we'll be safe and sound (safe and sound) We're safe and sound (safe and sound) We're safe and sound (Hold your ground) We're safe and sound (safe and sound) I could show you love In a tidal wave of mystery You'll still be standing next to me You could be my luck Even if we're six feet underground I know that we'll be safe and sound We're safe and sound I could lift you up I could show you what you want to see And take you where you want to be You could be my luck Even if the sky is falling down I know that we'll be safe and sound I could lift you up I could show you what you want to see And take you where you want to be You could be my luck Even if the sky is falling down I know that we'll be safe and sound We're safe and sound We're safe and sound We're safe and sound We're safe and sound (safe and sound) We're safe and sound (safe and sound) We're safe and sound (Hold your ground) We're safe and sound (safe and sound) We're safe and sound"
  //             }, 
  //             {}, 
  //             {}
  //           ]
  //         },
  //         {/* ... however many albums are returned ... */}
  //       ]
  //     },
  //     {},   // These also hold more artists based on the search given
  //     {} 
  //   ];

  // This is for the dynamic fetch data
  selectedSong: any;
  songAr = [];// Put it in an array to loop over ;p
  // this is the stored id for a refetch
  songId: any;
  albumId: any;
  artistId: any;
  // Holder for edit formgroup
  editSong: FormGroup;
  editData: any;
  

  constructor(
    private router: Router,
    private data: DataService,
    private apiService : ApiService,
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.editSong = this.fb.group({
      songName: new FormControl(),
      lyrics: new FormControl(),
      artistName: new FormControl(),
      albumName: new FormControl(),
      albumImage: new FormControl()
    });

    this.data.currentMessage.subscribe(passDataInto => this.selectedSong = passDataInto );
    this.songAr.push(this.selectedSong); // Put this in an array to parse through
    console.log('Song-Detail Component: Song/:id return data received: '); // pretty log of data returned >>
    console.log(this.songAr); 
    this.songId = this.selectedSong["song"]["albums"][0]["songs"][0]["id"]; // id for refetch if they update 
    this.albumId = this.selectedSong["song"]["albums"][0]["id"]; // id for album
    this.artistId = this.selectedSong["song"]["id"]; // id for artist


    console.log('editSong formgroup: ', this.editSong.value);
  }
  // We're gonna have two functions on this page, one for deleting, and the other updating

  // Delete is gonna link to http and remove the song from the db and navigate back to landing page

  // Update is gonna be a child component that opens up to update the song in the db, then refetch the data to update the page!




  /************************
   * Functions
   ***********************/
  update() {
    // Create an object that matches the interface to give to the apiService
    this.editData = { // This is the interface we can pass in all the vars
      albumName: this.editSong.value.albumName,
      albumImage: this.editSong.value.albumImage,
      artistName: this.editSong.value.artistName,
      lyrics: this.editSong.value.lyrics,
      songName: this.editSong.value.songName,
      // Pass in the id endpoints for each function -=->
      songId: this.songId,
      albumId: this.albumId,
      artistId: this.artistId
    }
    console.log('Object to pass into interface: ', this.editData);

    this.putSong();
    this.putAlbum();
    this.putArtist();
    
  }
  putSong() { // song update
    this.apiService.updateSong(this.editData)
    .subscribe(newSong => {
      console.log('api songEdit response:', newSong);
    });
  }
  putAlbum() { // album update
    this.apiService.updateAlbum(this.editData)
    .subscribe(newSong => {
      console.log('api albumEdit response:', newSong);
    });
    
  }
  putArtist() { // artist update
    this.apiService.updateArtist(this.editData)
    .subscribe(newSong => {
      console.log('api artistEdit response:', newSong);
    });
    
  }



    // Pulled them into individual fetches while errorhandling
  songSearch: any;
  // Delete
  delete() {
    this.deleteSo();
    this.deleteAl();
    this.deleteAr();

  }
      // Tried loading these in individual functions to fix error, now it just looks pretty neat
  deleteSo() {
    this.songSearch = {
      songSearch : this.songId
    };
    console.log('song search id param: ', this.songSearch);
    this.apiService.deleteSong(this.songSearch.songSearch)

  }

  deleteAl() {
    this.songSearch = {
      songSearch : this.albumId
    };
    console.log('album search id param: ', this.songSearch);
    this.apiService.deleteAlbum(this.songSearch.songSearch)

  }

  deleteAr() {
    this.songSearch = {
      songSearch : this.artistId
    };
    console.log('artist search id param: ', this.songSearch);
    this.apiService.deleteArtist(this.songSearch.songSearch)
    this.router.navigate(['app-landing-page']);
  }








  // Refetch
  getSongById() { 
    this.apiService.songIdSearch(this.songId)  
    .subscribe(song => {
      console.log('api response: ', song);
      this.selectedSong = song;
    });
  }



}
