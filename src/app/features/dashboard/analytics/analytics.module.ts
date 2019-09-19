import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { ModalModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,ModalModule.forRoot()
  ]
})
export class AnalyticsModule { }
