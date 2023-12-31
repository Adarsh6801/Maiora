import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(public sideNavService:NavbarService) {}
  ngOnInit(): void {   
    this.isClosed()
    console.log(this.isToggle,'hlo');
    
  }
  isToggle!:boolean;
  toggleSideNav() {
    this.sideNavService.toggle();
  }
  isClosed(){
    return this.sideNavService.sideNavState$.subscribe((res)=>{
      console.log(res,'hi');
      this.isToggle=res
      
    })
  }
}
