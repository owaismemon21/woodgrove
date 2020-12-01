import { Component } from '@angular/core';

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
    alert("2");
  }
}
