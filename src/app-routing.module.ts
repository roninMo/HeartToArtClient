import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { combineAll } from 'rxjs/operators';

// Route guards
import { AuthGuardService as AuthGuard } from './app/components/auth/guard/auth-guard.service';

// Components to route
import { LandingPageComponent } from './app/components/auth/songs/landing-page/landing-page.component';
import { LoginComponent } from './app/components/auth/login/login.component';
import { SignUpComponent } from './app/components/auth/sign-up/sign-up.component';
import { SongsComponent } from './app/components/auth/songs/songs/songs.component';
import { CreateSongComponent } from './app/components/auth/songs/create-song/create-song.component';
import { SearchResultsComponent } from './app/components/auth/songs/search-results/search-results.component';
import { PageNotFoundComponent } from './app/components/main/page-not-found/page-not-found.component';
import { ContactFormComponent } from './app/contact/contactform.component';


import { SongDetailComponent } from './app/components/auth/songs/song-detail/song-detail.component';

const routes: Routes = [
  { path: 'app-login' , component: LoginComponent },
  { path: 'app-sign-up' , component: SignUpComponent },
  { 
    path: 'app-landing-page',  
    component: LandingPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'app-search-results',
    component: SearchResultsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'app-songs', component: SongsComponent},
  { path: 'app-create-song', component: CreateSongComponent},

  { path: '', redirectTo: 'app-sign-up', pathMatch: 'full'},
 
  {
    path: 'app-song-detail',
    component: SongDetailComponent,
    canActivate: [AuthGuard],
  },
  { 
    path: 'app-songs', 
    component: SongsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 
    'app-create-song', 
    component: CreateSongComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 
    'contactform', 
    component: ContactFormComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'app-login', pathMatch: 'full'}, // Redirect to homepage upon startup
  { path: '**', component: PageNotFoundComponent } // Wildcard route for if routes throws an error/404
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    
})

export class AppRoutingModule{ }