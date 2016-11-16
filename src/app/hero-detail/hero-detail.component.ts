import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Hero } from '../shared/hero.model';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    @Output() heroDeselected = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    closeDetail(): void {
        this.hero = undefined;
        this.heroDeselected.emit({
            deselected: this.hero
        });
    }

}
