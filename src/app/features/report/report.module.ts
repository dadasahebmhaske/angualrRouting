import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './report-routing.module';
import {LayoutModule} from '../../shared/layout/layout.module';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [ CustomerDetailsComponent],
  imports: [
    CommonModule,
    routing,
    LayoutModule
  ]
})
export class ReportModule { }
