import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubModuleConfigurationRoutingModule } from './submoduleconfiguration-routing.module';
import { SubModuleConfigurationComponent } from './submoduleconfiguration.component';

@NgModule({
  declarations: [SubModuleConfigurationComponent],
  imports: [
    CommonModule,
    SubModuleConfigurationRoutingModule
  ]
})
export class SubModuleConfigurationModule { }
