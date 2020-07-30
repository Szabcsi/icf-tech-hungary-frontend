import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewContentRoutingModule } from './newcontent-routing.module';
import { NewContentComponent } from './newcontent.component';

@NgModule({
  declarations: [NewContentComponent],
  imports: [
    CommonModule,
    NewContentRoutingModule
  ]
})
export class NewContentModule { }
