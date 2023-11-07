import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  navigate(){
    this.router.navigateByUrl('/contactus');
  }

}
