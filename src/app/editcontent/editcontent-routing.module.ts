import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditContentComponent } from './editcontent.component';

const routes: Routes = [{
    path: '',
    component: EditContentComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditContentRoutingModule { }
