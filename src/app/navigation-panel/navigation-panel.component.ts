import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {

  constructor() { }

  @Input() isCollapse?: boolean;

  ngOnInit(): void {
  }

}
