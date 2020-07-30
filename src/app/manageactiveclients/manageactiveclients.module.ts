import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageActiveClientsRoutingModule } from './manageactiveclients-routing.module';
import { ManageActiveClientsComponent } from './manageactiveclients.component';

@NgModule({
  declarations: [ManageActiveClientsComponent],
  imports: [
    CommonModule,
    ManageActiveClientsRoutingModule
  ]
})
export class ManageActiveClientsModule { }
