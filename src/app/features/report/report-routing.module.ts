import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

export const routes:Routes = [
  
  {
    path: 'customer-details',
    component: CustomerDetailsComponent
  },

];


export const routing = RouterModule.forChild(routes)
