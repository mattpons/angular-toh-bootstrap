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
    showAddHero: boolean = false;

    constructor(private heroFetchService: HeroFetchService, private router: Router) { }

    ngOnInit(): void {
        this.getHeroes();
    }


    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroFetchService
            .create(name)
            .then((hero) => {
                this.heroes.push(hero);
                this.selectedHero = null;
                this.toggleAddHero();
            });
    }

    delete(hero: Hero): void {
        this.heroFetchService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

    toggleAddHero(): void {
        this.showAddHero = !this.showAddHero;
    }

    getHeroes(): void {
        this.heroFetchService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    closeDetail(): void {
        this.selectedHero = null;
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
