import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageActiveClientsComponent } from './manageactiveclients.component';

const routes: Routes = [{
    path: '',
    component: ManageActiveClientsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageActiveClientsRoutingModule { }
