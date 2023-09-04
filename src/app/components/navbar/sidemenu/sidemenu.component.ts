import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  isSideNavClosed: boolean = true;

  constructor(public sideNavService: NavbarService) {
    sideNavService.sideNavState$.subscribe((state) => {
      console.log(state);
      this.isSideNavClosed = state;
    });
  }
  closeSideNav() {
    this.sideNavService.toggle(); // Toggle the side navigation state
  }
}
