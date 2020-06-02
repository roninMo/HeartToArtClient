// This module's main concern is importing and exporting all our material components
import { NgModule } from '@angular/core';

  // These are the material imports
  import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
  import {MatCheckboxModule} from '@angular/material';
  import {MatInputModule} from '@angular/material/input';
  import {MatAutocompleteModule} from '@angular/material/autocomplete';
  import {MatDatepickerModule} from '@angular/material/datepicker';
  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatRadioModule} from '@angular/material/radio';
  import {MatSelectModule} from '@angular/material/select';
  import {MatSliderModule} from '@angular/material/slider';
  import {MatSlideToggleModule} from '@angular/material/slide-toggle';
  import {MatMenuModule} from '@angular/material/menu';
  import {MatSidenavModule} from '@angular/material/sidenav';
  import {MatToolbarModule} from '@angular/material/toolbar';
  import {MatListModule} from '@angular/material/list';
  import {MatGridListModule} from '@angular/material/grid-list';
  import {MatTabsModule} from '@angular/material/tabs';


// Add all the imports to the constant, then implement them to the import and export
const MaterialComponents = [
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
