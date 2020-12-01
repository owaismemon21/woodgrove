import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  isCollapse: boolean = false ; // hidden by default
  toggleNavigationPanel() {
    this.isCollapse = ! this.isCollapse;
    alert("1");
  }
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
