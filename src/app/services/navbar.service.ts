import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
  private sideNavState = new BehaviorSubject<boolean>(true);
  sideNavState$ = this.sideNavState.asObservable();

  toggle() {
    this.sideNavState.next(!this.sideNavState.value);
  }
}
