import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { InformationboxComponent } from './informationbox/informationbox.component';
import { DashboardgraphsComponent } from './dashboardgraphs/dashboardgraphs.component';
import { CustomerComponent } from './customer/customer.component';
import { NgxPopper } from 'angular-popper';
import { CustomergraphsComponent } from './customergraphs/customergraphs.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationPanelComponent,
    MainPanelComponent,
    TopNavbarComponent,
    InformationboxComponent,
    DashboardgraphsComponent,
    CustomerComponent,
    CustomergraphsComponent,
    CustomerinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopper,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
