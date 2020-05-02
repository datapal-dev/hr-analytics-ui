import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userSelectionData: any;
  username: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('user');
  }
  logout(){
    this.router.navigate(['login']);
  }
}
