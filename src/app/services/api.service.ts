import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators/';
import { MessageService } from './message.service';

// Interfaces/Models
import { CreateSong } from './models/createSong';
import { User } from './models/user';
import { SongData } from './models/songData';
import { Song } from 'src/app/song';
// import { SONGS } from 'src/app/mock-songs';
// import { CreateSongComponent } from 'src/app/components/auth/songs/create-song/create-song.component';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': environment.token
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  

  constructor( private http: HttpClient,
    private messageService: MessageService,
    ) { }


      // Fetch functions for creating and searching songs
    addSong (songCreateData: CreateSong): Observable<CreateSong> {
      console.log('api log: ', songCreateData);
      return this.http.post<CreateSong>(environment.createSongUrl, songCreateData, httpOptions)
    }

    songSearch (songData: SongData): Observable<SongData> {
      console.log('apiService recevied formgroup data: ', songData);
      return this.http.get<SongData>(`${environment.searchSongUrl + '/' + songData.songSearch}`, httpOptions)

    }

    songIdSearch (songData: SongData): Observable<SongData> {
      console.log('apiService: Received id from component call', songData);
      return this.http.get<SongData>(`${environment.idSearchUrl + songData}` , httpOptions)
    }




    // Update function song
    updateSong (revised: CreateSong): Observable<CreateSong> {
      console.log('apiService: Received data from component call for PUT-Song', revised);
      console.log('url search: ', `${environment.updateSong + revised.songId}`);
      return this.http.put<CreateSong>(`${environment.updateSong + revised.songId}`, revised, httpOptions)
    } // Update function album

    updateAlbum (revised: CreateSong): Observable<CreateSong> {
      console.log('apiService: Received data from component call for PUT-Album', revised);
      return this.http.put<CreateSong>(`${environment.updateAlbum + revised.albumId}`, revised, httpOptions)
    } // Update function artist

    updateArtist (revised: CreateSong): Observable<CreateSong> {
      console.log('apiService: Received data from component call for PUT-Artist', revised);
      return this.http.put<CreateSong>(`${environment.updateArtist + revised.artistId}`, revised, httpOptions)
    }



    // Delete function
    deleteSong (songData: SongData): Observable<SongData> {
      console.log('apiService: Received id from component call for DELETE-Song', songData);
      return this.http.delete<SongData>(`${environment.delSong + songData}`, httpOptions)
    }
    deleteAlbum (songData: SongData): Observable<SongData> {
      console.log('apiService: Received id from component call for DELETE-Album', songData);
      return this.http.delete<SongData>(`${environment.delAlbum + songData}`, httpOptions)
    }
    deleteArtist (songData: SongData): Observable<SongData> {
      console.log('apiService: Received id from component call for DELETE-Artist', songData);
      return this.http.delete<SongData>(`${environment.delArtist + songData}`, httpOptions)
    }
    



      // Login and signup
    login (userLog: User): Observable<User> {
      console.log('api received user login data: ', userLog);
      return this.http.post<User>(environment.loginUrl, userLog, httpOptions)
    }

    signup (userLog: User): Observable<User> {
      console.log('api received user login data: ', userLog);
      return this.http.post<User>(environment.signupUrl, userLog, httpOptions)
    }
    
}

