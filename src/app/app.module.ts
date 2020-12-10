import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule} from '@angular/common';  
import * as $ from 'jquery';
import { WatchlistComponent } from './watchlist/watchlist.component';


@NgModule({
 
  imports: [
    // CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    MatTabsModule,
    HighchartsChartModule,
    MatProgressSpinnerModule,
  ],
  declarations: [AppComponent, WatchlistComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
