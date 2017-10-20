import {LoginComponent} from './login/login.component';

export const appRoutes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'welcome',
    loadChildren: './welcome/welcome.module#WelcomeModule'
  },
  {
    path: '**', // fallback router must in the last
    component: LoginComponent
  }
];
