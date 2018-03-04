import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { AuthGuard } from './_guards/index';
import {MainpageComponent} from './mainpage/mainpage.component';

const appRoutes: Routes = [
    { path: '', component: MainpageComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'mainpage', component: MainpageComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '/mainpage' , canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(appRoutes);
