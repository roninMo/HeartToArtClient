import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    localStorage.setItem('token', '');
    this.router.navigate(['app-login']);

  }

}
