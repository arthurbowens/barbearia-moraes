import { Component } from '@angular/core';
import { SERVICES } from '../../data/content';
import { SITE } from '../../data/site.constants';

@Component({
  selector: 'app-services-section',
  standalone: true,
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css',
})
export class ServicesSectionComponent {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
}
