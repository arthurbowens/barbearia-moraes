import { Component } from '@angular/core';
import { NAV_LINKS, SITE } from '../../data/site.constants';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.css',
})
export class SiteFooterComponent {
  protected readonly site = SITE;
  protected readonly navLinks = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
}
