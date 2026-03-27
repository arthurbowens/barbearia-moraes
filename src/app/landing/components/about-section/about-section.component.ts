import { Component } from '@angular/core';
import { SITE } from '../../data/site.constants';

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css',
})
export class AboutSectionComponent {
  protected readonly site = SITE;
}
