import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './master-routing.module';
import { CompanyComponent } from './company/company.component';
import {LayoutModule} from '../../shared/layout/layout.module'

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    routing,
    LayoutModule
  ]
})
export class MasterModule { }
