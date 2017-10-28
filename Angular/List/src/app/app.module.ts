import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  // MdAutocompleteModule,
  // MdCheckboxModule,
  // MdDatepickerModule,
  // MdInputModule,
  // MdRadioModule,
  // MdSelectModule,
  // MdSliderModule,
  // MdSlideToggleModule,
  // MdMenuModule,
  // MdSidenavModule,
  // MdToolbarModule,
  MatListModule,
  // MdGridListModule,
  MatCardModule,
  // MdTabsModule,
  MatButtonModule,
  // MdButtonToggleModule,
  // MdChipsModule,
  MatIconModule,
  // MdProgressSpinnerModule,
  MatProgressBarModule,
  // MdDialogModule,
  // MdTooltipModule,
  // MdSnackBarModule,
  // MdTableModule,
  // MdSortModule,
  // MdPaginatorModule
} from '@angular/material';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // MdAutocompleteModule,
    // MdCheckboxModule,
    // MdDatepickerModule,
    // MdInputModule,
    // MdRadioModule,
    // MdSelectModule,
    // MdSliderModule,
    // MdSlideToggleModule,
    // MdMenuModule,
    // MdSidenavModule,
    // MdToolbarModule,
    MatListModule,
    // MdGridListModule,
    MatCardModule,
    // MdTabsModule,
    MatButtonModule,
    // MdButtonToggleModule,
    // MdChipsModule,
    MatIconModule,
    // MdProgressSpinnerModule,
    MatProgressBarModule,
    // MdDialogModule,
    // MdTooltipModule,
    // MdSnackBarModule,
    // MdTableModule,
    // MdSortModule,
    // MdPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
