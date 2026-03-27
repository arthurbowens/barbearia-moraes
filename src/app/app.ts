import { Component } from '@angular/core';
import { LandingPageComponent } from './landing/landing-page.component';

@Component({
  selector: 'app-root',
  imports: [LandingPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
