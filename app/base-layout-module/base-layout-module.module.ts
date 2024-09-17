import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseLayoutModuleRoutingModule } from './base-layout-module-routing.module';
import { BaseLayoutModuleComponent } from './base-layout-module.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AuthModule} from "../auth/auth.module";
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    BaseLayoutModuleComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BaseLayoutModuleRoutingModule,
    AuthModule
  ]
})
export class BaseLayoutModuleModule { }
