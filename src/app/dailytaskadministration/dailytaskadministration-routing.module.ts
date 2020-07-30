import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyTaskAdministrationComponent } from './dailytaskadministration.component';

const routes: Routes = [{
    path: '',
    component: DailyTaskAdministrationComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyTaskAdministrationRoutingModule { }
