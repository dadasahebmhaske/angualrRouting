import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { routing } from './auth.routing';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class AuthModule { }


