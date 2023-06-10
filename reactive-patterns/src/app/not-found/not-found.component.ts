import { Component } from '@angular/core';
import { SubHeroLogoComponent } from '../shared-ui/sub-hero-logo/sub-hero-logo.component';
import { HeroSectionComponent } from '../shared-ui/hero-section/hero-section.component';
import { SubSectionComponent } from '../shared-ui/sub-section/sub-section.component';

@Component({
  standalone: true,
  imports: [
    SubHeroLogoComponent,
    HeroSectionComponent,
    SubSectionComponent,
  ],
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

}
