import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './app-layouts/auth-layout.component';
import {RouterModule} from "@angular/router";
import { MainLayoutComponent } from './app-layouts/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  declarations: [AuthLayoutComponent, MainLayoutComponent, HeaderComponent,NavigationComponent ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
  ]
})
export class LayoutModule { }
