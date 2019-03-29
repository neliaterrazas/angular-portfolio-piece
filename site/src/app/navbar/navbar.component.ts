import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
  }
  constructor(public navTitle: string, public navDescription: string) { }
  listings: NavbarComponent[] = [
    new NavbarComponent('BARNEYS WAREHOUSE', 'Shop Designer Steals at Barneys Warehouse!')
  ]


  ngOnInit() {
  }

}
