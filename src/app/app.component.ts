import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'woodgrove';

  isCollapse: boolean = false ; // hidden by default
    
  toggleNavigationPanel() {
    this.isCollapse = ! this.isCollapse;
  }

  public screenWidth: any;
  public screenHeight: any;
  
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    if(this.screenWidth < 800) {
      this.isCollapse = true;
    } else {
      this.isCollapse = false;
    }
    
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if(this.screenWidth < 800) {
      this.isCollapse = true;
    } else {
      this.isCollapse = false;
    }
  }
}
