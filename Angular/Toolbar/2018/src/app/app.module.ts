import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BasicToolbarComponent} from './basic-toolbar/basic-toolbar.component';
import {SingleRowComponent} from './single-row/single-row.component';
import {MultipleRowsComponent} from './multiple-rows/multiple-rows.component';
import {ActionComponent} from './action/action.component';
import {MultiRowComponent} from './multi-row/multi-row.component';
import {IconButtonComponent} from './icon-button/icon-button.component';
import {PrimaryColorComponent} from './primary-color/primary-color.component';
import {AccentColorComponent} from './accent-color/accent-color.component';

const appRoutes: Routes = [
  {
    path: 'basicToolbar',
    component: BasicToolbarComponent
  },
  {
    path: 'singleRow',
    component: SingleRowComponent
  },
  {
    path: 'multipleRows',
    component: MultipleRowsComponent
  },
  {
    path: 'action',
    component: ActionComponent
  },
  {
    path: 'multiRow',
    component: MultiRowComponent
  },
  {
    path: 'iconButton',
    component: IconButtonComponent
  },
  {
    path: 'primaryColor',
    component: PrimaryColorComponent
  },
  {
    path: 'accentColor',
    component: AccentColorComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BasicToolbarComponent,
    SingleRowComponent,
    MultipleRowsComponent,
    ActionComponent,
    MultiRowComponent,
    IconButtonComponent,
    PrimaryColorComponent,
    AccentColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    /* Animations */
    BrowserAnimationsModule,
    NoopAnimationsModule,
    /*Form Controls*/
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    /*Navigation*/
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    /*Layout*/
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    /*Buttons & Indicators*/
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    /*Popups & Modals*/
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    /*Data table*/
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
