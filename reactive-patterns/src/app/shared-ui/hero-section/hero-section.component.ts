import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  // If we forget to pass the imageUrl property, this sets a default value 
  @Input() imageUrl = '../../assets/images/heros/hero-1.jpg';
}
