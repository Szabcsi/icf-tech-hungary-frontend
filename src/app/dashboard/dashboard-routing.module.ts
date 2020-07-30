import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SystemConfigurationComponent } from '../systemconfiguration/systemconfiguration.component';
import { SubModuleConfigurationComponent } from 'src/app/submoduleconfiguration/submoduleconfiguration.component';
import { DailyTaskAdministrationComponent } from 'src/app/dailytaskadministration/dailytaskadministration.component';
import { NewContentComponent } from 'src/app/newcontent/newcontent.component';
import { EditContentComponent } from 'src/app/editcontent/editcontent.component';
import { DeleteContentComponent } from 'src/app/deletecontent/deletecontent.component';
import { ClientListComponent } from 'src/app/clientlist/clientlist.component';
import { ManageActiveClientsComponent } from 'src/app/manageactiveclients/manageactiveclients.component';
import { DashboardAppComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardAppComponent,
    children: [
      { path: 'systemconfiguration', component: SystemConfigurationComponent },
      { path: 'submoduleconfiguration', component: SubModuleConfigurationComponent },
      { path: 'dailytaskadministration', component: DailyTaskAdministrationComponent },
      { path: 'newcontent', component: NewContentComponent },
      { path: 'editcontent', component: EditContentComponent },
      { path: 'deletecontent', component: DeleteContentComponent },
      { path: 'clientlist', component: ClientListComponent },
      { path: 'manageactiveclients', component: ManageActiveClientsComponent }
    ]
  },
  { path: '**', redirectTo: ''/*, pathMatch: 'full'*/ }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }


