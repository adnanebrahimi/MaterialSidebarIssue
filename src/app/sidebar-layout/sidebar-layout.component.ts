import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';
import { MatDrawerContainer } from '@angular/material';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent {

  isHandset = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        if (result.matches) {
          this.isHandset = true;
          return true;
        } else {
          this.isHandset = false;
          return false;
        }
      })
    );
  @ViewChild('drawer', { static: true }) drawer: MatDrawerContainer;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        if (this.isHandset) {
          this.drawer.close();
          console.log('closed');
        }
      });

  }

}
