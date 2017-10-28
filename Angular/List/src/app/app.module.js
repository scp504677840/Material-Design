"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
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
            // MdListModule,
            // MdGridListModule,
            material_1.MatCardModule,
            // MdTabsModule,
            material_1.MatButtonModule,
            // MdButtonToggleModule,
            // MdChipsModule,
            material_1.MatIconModule,
            // MdProgressSpinnerModule,
            material_1.MatProgressBarModule,
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
