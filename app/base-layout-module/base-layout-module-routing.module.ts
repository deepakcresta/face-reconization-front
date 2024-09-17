import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutModuleComponent } from './base-layout-module.component';

const routes: Routes = [
  { path: '',
    component: BaseLayoutModuleComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseLayoutModuleRoutingModule { }
