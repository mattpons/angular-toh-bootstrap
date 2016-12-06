import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { AppRoutingModule }     from './app-routing.module';

import { InMemoryDataService }  from './shared/in-memory-data.service';

import { HeroFetchService } from './shared/hero-fetch.service';

import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroListComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule,
        CarouselModule
    ],
    providers: [HeroFetchService],
    bootstrap: [AppComponent]
})

export class AppModule { }
