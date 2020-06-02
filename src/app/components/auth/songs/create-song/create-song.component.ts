import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../services/api.service';
import { Song } from 'src/app/song';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {
  createSong: FormGroup;
  songs = [];

  constructor(
    private fb:FormBuilder, 
    private httpClient: HttpClient, 
    private apiService : ApiService
    ) { }


  ngOnInit() {

    this.createSong = this.fb.group({
      songName: new FormControl(),
      lyrics: new FormControl(),
      artistName: new FormControl(),
      albumName: new FormControl(),
      albumImage: new FormControl()

    })
  }

  onClickSubmit() {
    this.songs = this.createSong.value;
    console.log('songs array: ', this.songs);
    console.log('This.createSong.value: ', this.createSong.value);
    this.postSong(this.songs);
    this.createSong.reset()
  }


  postSong(songInfo: any) {
    console.log(songInfo);
    this.apiService.addSong(songInfo)
    .subscribe(newSong => songInfo);
    alert("Song Created!")

  }
}
