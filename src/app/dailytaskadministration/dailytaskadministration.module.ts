import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyTaskAdministrationRoutingModule } from './dailytaskadministration-routing.module';
import { DailyTaskAdministrationComponent } from './dailytaskadministration.component';

@NgModule({
  declarations: [DailyTaskAdministrationComponent],
  imports: [
    CommonModule,
    DailyTaskAdministrationRoutingModule
  ]
})
export class DailyTaskAdministrationModule { }
