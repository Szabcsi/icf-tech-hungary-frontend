import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteContentRoutingModule } from './deletecontent-routing.module';
import { DeleteContentComponent } from './deletecontent.component';

@NgModule({
  declarations: [DeleteContentComponent],
  imports: [
    CommonModule,
    DeleteContentRoutingModule
  ]
})
export class DeleteContentModule { }
