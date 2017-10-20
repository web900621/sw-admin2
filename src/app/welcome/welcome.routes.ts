import {WelcomeComponent} from './welcome.component';
import {ApplicationsComponent} from './applications/applications.component';
import {HometplComponent} from './hometpl/hometpl.component';
import {TodolistComponent} from './todolist/todolist.component';
import {WorkspaceComponent} from './workspace/workspace.component';
import {DiyreportsComponent} from './diyreports/diyreports.component';
export const welcomeRoutes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {path: '', redirectTo: 'hometpl', pathMatch: 'full'},
      {path: 'hometpl', component: HometplComponent},
      {path: 'todolist', component: TodolistComponent},
      {path: 'diy', component: DiyreportsComponent},
      {path: 'apps', component: ApplicationsComponent}, {
        path: '',
        component: WorkspaceComponent,
        outlet: 'workspace'
      }
    ]
  }
];
