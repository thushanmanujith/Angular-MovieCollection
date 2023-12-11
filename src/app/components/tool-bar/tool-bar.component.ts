import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  constructor(private router: Router) { }
  routes = this.router.config.map((route: Route) => route?.path || 'SignIn');
  pageTitle = 'Home';

  ngOnInit(): void {
  }

  changeRoute(route: string): void {
    debugger
    this.pageTitle = route;
    const pathToGo = route === 'SignIn' ? '/' : route;
    this.router.navigate([pathToGo]);
  }
}
