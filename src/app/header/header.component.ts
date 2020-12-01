import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isCollapse: boolean = false ; // hidden by default
  toggleNavigationPanel() {
    this.isCollapse = ! this.isCollapse;
    alert("1");
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}