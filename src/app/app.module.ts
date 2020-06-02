import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Components 
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/auth/songs/landing-page/landing-page.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { MainNavComponent } from './components/main/main-nav/main-nav.component';
import { ContactModule } from './contact/contact.module';
import { LoginComponent } from './components/auth/login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { CreateSongComponent } from '../app/components/auth/songs/create-song/create-song.component';

// Modules and Services
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from './components/auth/guard/auth.service';
import { AuthGuardService } from './components/auth/guard/auth-guard.service';

// Material imports 
// import { MaterialModule } from './assets/material.module'; // Laggy animations from this );
import { SearchMenuComponent } from './components/main/search-menu/search-menu.component';
import { SongsComponent } from './components/auth/songs/songs/songs.component';
import { SongDetailComponent } from './components/auth/songs/song-detail/song-detail.component';
import { MessagesComponent } from './components/auth/songs/messages/messages.component';
import { PageNotFoundComponent } from './components/main/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AuthHomeComponent } from './components/auth/auth-home/auth-home.component';





  // These are the material imports
  // import {MatCheckboxModule} from '@angular/material';
  import {MatInputModule} from '@angular/material/input';
  import {MatAutocompleteModule} from '@angular/material/autocomplete';
  // import {MatDatepickerModule} from '@angular/material/datepicker';
  // import {MatFormFieldModule} from '@angular/material/form-field';
  // import {MatRadioModule} from '@angular/material/radio';
  // import {MatSelectModule} from '@angular/material/select';
  // import {MatSliderModule} from '@angular/material/slider';
  // import {MatSlideToggleModule} from '@angular/material/slide-toggle';
  import {MatMenuModule} from '@angular/material/menu';
  import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
  import { SearchResultsComponent } from './components/auth/songs/search-results/search-results.component';
import { ContactComponent } from './contact/contact.component';
  // import {MatGridListModule} from '@angular/material/grid-list';
  // import {MatTabsModule} from '@angular/material/tabs';







@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainNavComponent,
    LandingPageComponent,
    LoginComponent,
    SearchMenuComponent,
    SongsComponent,
    SongDetailComponent,
    MessagesComponent,
    CreateSongComponent,
    PageNotFoundComponent,
    SignUpComponent,
    AuthHomeComponent,
    SearchResultsComponent,
    ContactComponent    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ContactModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    MatInputModule,
    MatAutocompleteModule,
    // MatCheckboxModule,
    // MatDatepickerModule,
    // MatFormFieldModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatGridListModule,
    // MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    // MaterialModule,
    AppRoutingModule
  ],
  providers: [
    RouterModule,
    AuthGuardService, 
    AuthService, 
    JwtHelperService,{provide:JWT_OPTIONS,useValue:JWT_OPTIONS}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
