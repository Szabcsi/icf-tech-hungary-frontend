import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAppComponent } from './dashboard.component';
import { SystemConfigurationModule } from 'src/app/systemconfiguration/systemconfiguration.module';
import { SubModuleConfigurationModule } from '../submoduleconfiguration/submoduleconfiguration.module';
import { DailyTaskAdministrationModule } from '../dailytaskadministration/dailytaskadministration.module';
import { NewContentModule } from '../newcontent/newcontent.module';
import { EditContentModule } from '../editcontent/editcontent.module';
import { DeleteContentModule } from '../deletecontent/deletecontent.module';
import { ClientListModule } from '../clientlist/clientlist.module';
import { ManageActiveClientsModule } from '../manageactiveclients/manageactiveclients.module';

// import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MaterialsModule } from '../modules/materials.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardAppComponent],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    // FlexLayoutModule,
    FormsModule,
    // ReactiveFormsModule,
    MaterialsModule,
    NgMaterialMultilevelMenuModule,
    DashboardRoutingModule,
    SystemConfigurationModule,
    SubModuleConfigurationModule,
    DailyTaskAdministrationModule,
    NewContentModule,
    EditContentModule,
    DeleteContentModule,
    ClientListModule,
    ManageActiveClientsModule,
  ]
})
export class DashboardModule { }
