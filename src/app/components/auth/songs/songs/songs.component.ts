import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Song } from 'src/app/song';
import { SONGS } from 'src/app/mock-songs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})

export class SongsComponent implements OnInit {

  songs: Song[];

  constructor(private apiService: ApiService) { }

  getSongs(): void {
    this.apiService.getSongs()
        .subscribe(songs => this.songs = songs);
  }
  ngOnInit() {

      this.getSongs();
    }
}  

