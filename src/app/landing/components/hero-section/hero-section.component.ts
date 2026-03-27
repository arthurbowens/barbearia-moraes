import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SiteHeaderComponent } from '../site-header/site-header.component';
import { SITE } from '../../data/site.constants';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [UpperCasePipe, SiteHeaderComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  protected readonly site = SITE;
}
