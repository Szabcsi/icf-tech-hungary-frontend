import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubModuleConfigurationComponent } from './submoduleconfiguration.component'

const routes: Routes = [{
    path: '',
    component: SubModuleConfigurationComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubModuleConfigurationRoutingModule { }
