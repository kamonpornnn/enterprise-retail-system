import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { applicationRoutes } from './core/config/app-routes';

const routes: Routes = applicationRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
