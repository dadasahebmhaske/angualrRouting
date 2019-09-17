import {ModuleWithProviders} from "@angular/core"
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyComponent} from './company/company.component';

export const routes:Routes = [
  
  {
    path: 'company',
    component: CompanyComponent
  },

];


export const routing = RouterModule.forChild(routes)
