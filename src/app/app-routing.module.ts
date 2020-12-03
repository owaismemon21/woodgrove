import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'customer', component: CustomerComponent },
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
  
   // pathMatch: 'full',
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
