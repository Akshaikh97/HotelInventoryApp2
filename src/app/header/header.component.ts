import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ak-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
