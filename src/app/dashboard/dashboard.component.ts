import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroFetchService } from '../shared/hero-fetch.service';
import { Hero } from '../shared/hero.model';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    public slideInterval: number = 2000;
    public noWrapSlides: boolean = false;
    public slides: Array<any> = [];

    constructor(private heroFetchService: HeroFetchService, private router: Router) {

    }

    ngOnInit(): void {
        this.heroFetchService.getHeroes()
            .then((heroes) => {
                this.heroes = heroes.slice(0, 4);
                this.prepCarousel();
            });
    }

    private prepCarousel() {
        for (let hero of this.heroes) {
            this.slides.push({
                heroId: hero.id,
                image: `assets/images/star.svg`,
                text: `${hero.name}`
            });
        }
    }

    gotoDetail(slide): void {
        this.router.navigate(['/detail', slide.heroId]);
    }

}
