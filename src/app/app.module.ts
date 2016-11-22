import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { AppRoutingModule }     from './app-routing.module';

import { HeroFetchService } from './shared/hero-fetch.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HolderjsDirective } from 'angular-2-holderjs/holderjs.directive';


@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroListComponent,
        DashboardComponent,
        HolderjsDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        CarouselModule
    ],
    providers: [HeroFetchService],
    bootstrap: [AppComponent]
})

export class AppModule { }
