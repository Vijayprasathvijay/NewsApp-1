import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bookmarkStatus: boolean = false;
  searchStatus: boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  OnRegister()
  {
    this.router.navigate(["/user-reg"])
  }
  OnLogin()
  {
    this.router.navigate(['/login'])
  }
}
