import { Component, signal } from '@angular/core';
import { NAV_LEFT, NAV_RIGHT, SITE } from '../../data/site.constants';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css',
})
export class SiteHeaderComponent {
  protected readonly site = SITE;
  protected readonly navLeft = NAV_LEFT;
  protected readonly navRight = NAV_RIGHT;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
