import { Component, OnInit } from '@angular/core';
import { Details } from '../test/details';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItem: Details = {
    id: 1,
    name: 'BARNEYS WAREHOUSE'
  };
  constructor() { }

  ngOnInit() {
  }

}
