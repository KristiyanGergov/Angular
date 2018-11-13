import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero/ts/hero-detail.component'
import { HeroesComponent } from './hero/ts/heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero/ts/hero-search.component';

import { HeroService } from './hero/ts/hero.service';
import { Logger } from "../app/hero/ts/logger.service";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    HeroService,
    Logger,
  ],
  bootstrap: [AppComponent],

})

export class AppModule {

}