import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

// This component is standalone which means that Angular handles declaring and exporting it to other parts of the app
// It is using Angular Material elements so we have to add those to the imports array
@Component({
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
  ],
  selector: 'app-sub-hero-logo',
  templateUrl: './sub-hero-logo.component.html',
  styleUrls: ['./sub-hero-logo.component.css']
})
export class SubHeroLogoComponent {
  readonly logoUrl = '../../assets/images/badge.png';
}
