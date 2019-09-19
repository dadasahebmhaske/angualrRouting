import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { ChangePasswordComponent } from './change-password/change-password.component';

export const routes:Routes = [
  
  {
    path: 'change-password',
    component: ChangePasswordComponent
  },

];


export const routing = RouterModule.forChild(routes)