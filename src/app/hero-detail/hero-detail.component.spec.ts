/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroFetchService } from '../shared/hero-fetch.service';

xdescribe('HeroDetailComponent', () => {
    let component: HeroDetailComponent;
    let fixture: ComponentFixture<HeroDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeroDetailComponent],
             providers: [
                ActivatedRoute,
                HeroFetchService
            ],
            imports: [ FormsModule ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
