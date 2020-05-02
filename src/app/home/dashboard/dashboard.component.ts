import { Component, OnInit } from '@angular/core';
import {HomeComponent} from './../home.component';
import { ActivatedRoute, Router , NavigationEnd} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  inputData : any;
  activeRoute: string = '';
  constructor(private home:HomeComponent, private router:Router) { }
  
  ngOnInit() {
    this.inputData = this.home.userSelectionData;
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.activeRoute = event.url.slice(1).split('/')[2];
        }
      });
  }
  navTo(a){
    this.router.navigate(['home/dashboard/'+a]);
  }
}
