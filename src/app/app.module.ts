import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { AppRoutingModule }     from './app-routing.module';

import { HeroFetchService } from './shared/hero-fetch.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [HeroFetchService],
    bootstrap: [AppComponent]
})

export class AppModule { }
