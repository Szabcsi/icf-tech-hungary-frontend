import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteContentComponent } from './deletecontent.component';

const routes: Routes = [{
    path: '',
    component: DeleteContentComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteContentRoutingModule { }
