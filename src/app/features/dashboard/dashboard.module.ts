import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnalyticsModule} from './analytics/analytics.module'
import {routing} from './dashboard.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    routing,
    
  ]
})
export class DashboardModule { }


