import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './setting-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class SettingModule { }
