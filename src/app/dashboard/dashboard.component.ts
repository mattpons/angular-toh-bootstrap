import { Component, OnInit } from '@angular/core';

import { HeroFetchService } from '../shared/hero-fetch.service';
import { Hero } from '../shared/hero.model';

import { HolderjsDirective } from 'angular-2-holderjs/holderjs.directive';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
    public myInterval: number = 2000;
    public noWrapSlides: boolean = false;
    public slides: Array<any> = [];

    constructor(private heroFetchService: HeroFetchService) {

    }

    ngOnInit(): void {
        this.heroFetchService.getHeroes()
            .then((heroes) => {
                this.heroes = heroes.slice(1, 5);
                for (let hero of this.heroes) {
                    this.slides.push({
                        image: `holder.js/100px250/?theme=lava&text=${hero.name}`
                    });
                }
            });
    }

}
