import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroFetchService } from './shared/hero-fetch.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [HeroFetchService],
    bootstrap: [AppComponent]
})

export class AppModule { }
