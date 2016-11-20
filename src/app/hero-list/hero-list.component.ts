import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private heroFetchService: HeroFetchService, private router: Router) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroFetchService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    heroDeselected(event): void {
        this.selectedHero = event.deselected;
    }

}
