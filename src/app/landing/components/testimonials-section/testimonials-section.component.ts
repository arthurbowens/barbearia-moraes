import { Component } from '@angular/core';
import { TESTIMONIALS } from '../../data/content';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.css',
})
export class TestimonialsSectionComponent {
  protected readonly testimonials = TESTIMONIALS;
}
