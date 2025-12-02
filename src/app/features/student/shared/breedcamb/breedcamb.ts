import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breedcamb',
  templateUrl: './breedcamb.html',
  imports: [BreadcrumbModule],
  styleUrl: './breedcamb.css'
})
export class Breedcamb implements OnInit {

  items: MenuItem[] = [];
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    // Build breadcrumb on every navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.buildBreadcrumb();
    });

    // Initial build
    this.buildBreadcrumb();
  }

  private buildBreadcrumb() {
    const breadcrumbs: MenuItem[] = [];

    breadcrumbs.push({ label: 'Home', routerLink: '/student/diploma' });
    const chidlren = this.route.children;
    for (let child of chidlren) {
      if (child && child.snapshot.data['Breadcrumb']!='Diploma') {
        const snapshot = child.snapshot;
        const label = snapshot.data['Breadcrumb'];
        const url = snapshot.url.map(s => s.path).join('/');
        if (label) {
          breadcrumbs.push({ label, routerLink: `/student/${url}` });
        }
      }
    }
    this.items = breadcrumbs;
  }
}
