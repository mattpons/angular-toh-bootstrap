import { Component, OnInit } from '@angular/core';

import { HeroFetchService } from '../shared/hero-fetch.service';
import { Hero } from '../shared/hero.model';



@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})


export class HeroListComponent implements OnInit {
    title = 'Bootstrap Heroes';

    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroFetchService: HeroFetchService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroes = this.heroFetchService.getHeroes();
    }


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    heroDeselected(event): void {
        this.selectedHero = event.deselected;
    }

}
