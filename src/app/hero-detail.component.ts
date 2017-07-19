import { Hero } from './hero';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero-detail'
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}