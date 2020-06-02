// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  target: '', 
  production: false,
  songsUrl: 'http://localhost:3000/songs' || 'https://heart-to-art-server.herokuapp.com/songs',
  createSongUrl: 'http://localhost:3000/songs/create' || 'https://heart-to-art-server.herokuapp.com/songs/create',searchSongUrl: 'http://localhost:3000/songs/search/song' || 'https://heart-to-art-server.herokuapp.com/songs/search/song/',
  idSearchUrl: 'http://localhost:3000/songs/search/' || 'https://heart-to-art-server.herokuapp.com/songs/search/',
  delSong: 'http://localhost:3000/songs/deleteSong/' || 'https://heart-to-art-server.herokuapp.com/songs/deleteSong/',
  
  updateSong: 'http://localhost:3000/songs/updateSong/' || 'https://heart-to-art-server.herokuapp.com/song/updateSong/',

  delAlbum: 'http://localhost:3000/songs/deleteAlbum/' || 'https://heart-to-art-server.herokuapp.com/songs/deleteAlbum/',

  updateAlbum: 'http://localhost:3000/songs/updateAlbum/' || 'https://heart-to-art-server.herokuapp.com/song/updateAlbum/',

  delArtist: 'http://localhost:3000/songs/deleteArtist/' || 'https://heart-to-art-server.herokuapp.com/songs/deleteArtist/',

  updateArtist: 'http://localhost:3000/songs/updateArtist/' || 'https://heart-to-art-server.herokuapp.com/song/updateArtist/',

  loginUrl: 'http://localhost:3000/user/login' || 'https://heart-to-art-server.herokuapp.com/user/login',
  signupUrl: 'http://localhost:3000/user/signup' || 'https://heart-to-art-server.herokuapp.com/user/signup',
  
  token: localStorage.getItem('token') || ''
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
