import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
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
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BasicCardsComponent} from './basic-cards/basic-cards.component';
import {ExampleComponent} from './example/example.component';
import {TitleGroupComponent} from './title-group/title-group.component';
import {FooterComponent} from './footer/footer.component';
import {DividerComponent} from './divider/divider.component';
import {CardImageComponent} from './card-image/card-image.component';
import {CardAvatarComponent} from './card-avatar/card-avatar.component';
import {CustomComponent} from './custom/custom.component';

const appRoutes: Routes = [
  {
    path: 'basicCards',
    component: BasicCardsComponent
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: 'titleGroup',
    component: TitleGroupComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'divider',
    component: DividerComponent
  },
  {
    path: 'cardImage',
    component: CardImageComponent
  },
  {
    path: 'cardAvatar',
    component: CardAvatarComponent
  },
  {
    path: 'custom',
    component: CustomComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BasicCardsComponent,
    ExampleComponent,
    TitleGroupComponent,
    FooterComponent,
    DividerComponent,
    CardImageComponent,
    CardAvatarComponent,
    CustomComponent
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
