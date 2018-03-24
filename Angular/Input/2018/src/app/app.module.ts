import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {RouterModule, Routes} from '@angular/router';
import {BaseInputsComponent} from './base-inputs/base-inputs.component';
import {ErrorStateMatcherComponent} from './error-state-matcher/error-state-matcher.component';
import {AutoResizingTextareaComponent} from './auto-resizing-textarea/auto-resizing-textarea.component';
import {ClearButtonInputComponent} from './clear-button-input/clear-button-input.component';
import {FormInputsComponent} from './form-inputs/form-inputs.component';
import {HintInputComponent} from './hint-input/hint-input.component';
import {PrefixesSuffixesComponent} from './prefixes-suffixes/prefixes-suffixes.component';
import {BasicComponent} from './basic/basic.component';
import {ErrorMessagesComponent} from './error-messages/error-messages.component';
import {PrefixSuffixComponent} from './prefix-suffix/prefix-suffix.component';
import {DividerColorsComponent} from './divider-colors/divider-colors.component';
import {HintsComponent} from './hints/hints.component';
import {FormsComponent} from './forms/forms.component';
import {NumberInputsComponent} from './number-inputs/number-inputs.component';
import {FormsInputsComponent} from './forms-inputs/forms-inputs.component';
import {FloatingLabelsComponent} from './floating-labels/floating-labels.component';
import {FloatLabelComponent} from './float-label/float-label.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AutoSizeTextareaComponent} from './auto-size-textarea/auto-size-textarea.component';
import {AppearanceComponent} from './appearance/appearance.component';
import {AutoFillComponent} from './auto-fill/auto-fill.component';
import {ReadonlyComponent} from './readonly/readonly.component';

const appRoutes: Routes = [
  {
    path: 'baseInputs',
    component: BaseInputsComponent
  },
  {
    path: 'errorStateMatcher',
    component: ErrorStateMatcherComponent
  },
  {
    path: 'autoResizingTextarea',
    component: AutoResizingTextareaComponent
  },
  {
    path: 'clearButtonInput',
    component: ClearButtonInputComponent
  },
  {
    path: 'formInputs',
    component: FormInputsComponent
  },
  {
    path: 'hintInput',
    component: HintInputComponent
  },
  {
    path: 'prefixesSuffixes',
    component: PrefixesSuffixesComponent
  },
  {
    path: 'basic',
    component: BasicComponent
  },
  {
    path: 'errorMessages',
    component: ErrorMessagesComponent
  },
  {
    path: 'prefixSuffix',
    component: PrefixSuffixComponent
  },
  {
    path: 'dividerColors',
    component: DividerColorsComponent
  },
  {
    path: 'hints',
    component: HintsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'numberInputs',
    component: NumberInputsComponent
  },
  {
    path: 'formsInputs',
    component: FormsInputsComponent
  },
  {
    path: 'floatLabel',
    component: FloatLabelComponent
  },
  {
    path: 'floatingLabels',
    component: FloatingLabelsComponent
  },
  {
    path: 'autoSizeTextarea',
    component: AutoSizeTextareaComponent
  },
  {
    path: 'appearance',
    component: AppearanceComponent
  },
  {
    path: 'autoFill',
    component: AutoFillComponent
  },
  {
    path: 'readOnly',
    component: ReadonlyComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BaseInputsComponent,
    ErrorStateMatcherComponent,
    AutoResizingTextareaComponent,
    ClearButtonInputComponent,
    FormInputsComponent,
    HintInputComponent,
    PrefixesSuffixesComponent,
    BasicComponent,
    ErrorMessagesComponent,
    PrefixSuffixComponent,
    DividerColorsComponent,
    HintsComponent,
    FormsComponent,
    NumberInputsComponent,
    FormsInputsComponent,
    FloatingLabelsComponent,
    FloatLabelComponent,
    AutoSizeTextareaComponent,
    AppearanceComponent,
    AutoFillComponent,
    ReadonlyComponent
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
