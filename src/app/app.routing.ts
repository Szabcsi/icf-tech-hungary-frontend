import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';

// { path: '', redirectTo: 'login', pathMatch: 'full' },
const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    // otherwise redirect to login
    { path: '**', redirectTo: 'login' , pathMatch: 'full' }
];

export const appRoutingModule = RouterModule.forRoot(routes, { enableTracing: false });
