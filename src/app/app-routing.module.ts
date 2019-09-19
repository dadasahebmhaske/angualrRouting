import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";




const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    data: { pageTitle: "Home" },
    children: [
      {
        path: "",
        redirectTo: "dashboard/analytics",
        pathMatch: "full"
      },
  {
    path: "dashboard",
    loadChildren: "./features/dashboard/dashboard.module#DashboardModule",
    data: { pageTitle: "Dashboard" }
  },
      {
        path: "master",
        loadChildren: "./features/master/master.module#MasterModule",
        data: { pageTitle: "Master" }
      },   
      {
        path: "report",
        loadChildren: "./features/report/report.module#ReportModule",

      },    
      {
        path: "setting",
        loadChildren: "./features/setting/setting.module#SettingModule",
        
      },     
   ]
   },
  //  {
  //   path: "dashboard",
  //   component: MainLayoutComponent,
  //   loadChildren: "./features/master/master.module#MasterModule",
  // },
  {
    path: "auth",
    component: AuthLayoutComponent,
    loadChildren: "./features/auth/auth.module#AuthModule"
  },
  { path: "**", redirectTo: "miscellaneous/error404" }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }




