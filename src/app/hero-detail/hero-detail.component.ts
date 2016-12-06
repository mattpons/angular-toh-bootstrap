import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroFetchService } from '../shared/hero-fetch.service';
import { Hero } from '../shared/hero.model';


@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    @Output() heroDeselected = new EventEmitter();

    constructor(private heroFetchService: HeroFetchService,
        private route: ActivatedRoute,
        private location: Location) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroFetchService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    closeDetail(): void {
        this.hero = undefined;
        this.heroDeselected.emit({
            deselected: this.hero
        });
    }

    isInDetail(): boolean {
        return (this.location.path().indexOf('/detail') === 0);
    }

    save(): void {
        this.heroFetchService.update(this.hero)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }

}
