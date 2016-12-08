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
    errorMessage: any;

    constructor(private heroFetchService: HeroFetchService, private router: Router) { }

    ngOnInit(): void {
        this.getHeroes();
    }


    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroFetchService
            .addHero(name)
            .subscribe((hero) => {
                this.heroes.push(hero);
                this.selectedHero = null;
                this.toggleAddHero();
            },
            error => this.errorMessage = <any>error);

    }

    delete(hero: Hero): void {
        this.heroFetchService
            .deleteHero(hero.id)
            .subscribe(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) {
                    this.selectedHero = null;
                }
            },
            error => this.errorMessage = <any>error);
    }

    toggleAddHero(): void {
        this.showAddHero = !this.showAddHero;
    }

    getHeroes() {
        this.heroFetchService.getHeroes()
            .subscribe(
            heroes => this.heroes = heroes,
            error => this.errorMessage = <any>error);
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
