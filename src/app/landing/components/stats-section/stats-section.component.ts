import { Component } from '@angular/core';
import { STATS } from '../../data/content';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.css',
})
export class StatsSectionComponent {
  protected readonly stats = STATS;
}
