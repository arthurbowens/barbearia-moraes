import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SITE } from '../../data/site.constants';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css',
})
export class ContactSectionComponent {
  protected readonly site = SITE;
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly mapEmbedSrc: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    SITE.mapsEmbedUrl,
  );
}
