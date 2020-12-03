import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  constructor() { }
  
  @Input() isCollapse?: boolean;
  
  @Output() isCollapseChange = new EventEmitter(); 
  
  
  ngOnInit(): void {
  }

  
  toggleNavigationPanel() {
    this.isCollapse = ! this.isCollapse;
    this.isCollapseChange.emit(this.isCollapse); 
  }

}
