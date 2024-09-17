import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from "./auth/user-login/user-login.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path:'user-login',
    component: UserLoginComponent
  },
  {
    path: 'user-login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {
    path: 'features',
    loadChildren: () => import('./feature-module/feature-module.module').then(m => m.FeatureModuleModule)
  },
  {
    path: 'layout',
    loadChildren: () => import('./base-layout-module/base-layout-module.module').then(m => m.BaseLayoutModuleModule)
  },
  {
    path: '**',
    redirectTo:'user-login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
