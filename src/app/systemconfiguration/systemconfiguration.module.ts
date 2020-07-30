import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../modules/materials.module';
import { SystemConfigurationRoutingModule } from './systemconfiguration-routing.module';
import { SystemConfigurationComponent } from './systemconfiguration.component';

@NgModule({
  declarations: [SystemConfigurationComponent],
  imports: [
    CommonModule,
    SystemConfigurationRoutingModule
  ]
})
export class SystemConfigurationModule { }
