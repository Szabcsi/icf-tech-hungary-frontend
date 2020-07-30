import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientListRoutingModule } from './clientlist-routing.module';
import { ClientListComponent } from './clientlist.component';

@NgModule({
  declarations: [ClientListComponent],
  imports: [
    CommonModule,
    ClientListRoutingModule
  ]
})
export class ClientListModule { }
