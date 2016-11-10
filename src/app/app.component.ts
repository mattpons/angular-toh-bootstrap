import { Component } from '@angular/core';

import { Hero } from './shared/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bootstrap Heroes';
  hero: Hero = {
  id: 1,
  name: 'Windstorm'
};
}
