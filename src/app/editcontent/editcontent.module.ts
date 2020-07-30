import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditContentRoutingModule } from './editcontent-routing.module';
import { EditContentComponent } from './editcontent.component';

@NgModule({
  declarations: [EditContentComponent],
  imports: [
    CommonModule,
    EditContentRoutingModule
  ]
})
export class EditContentModule { }
