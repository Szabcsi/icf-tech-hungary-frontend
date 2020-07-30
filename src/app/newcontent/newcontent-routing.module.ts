import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewContentComponent } from './newcontent.component';

const routes: Routes = [{
    path: '',
    component: NewContentComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewContentRoutingModule { }
