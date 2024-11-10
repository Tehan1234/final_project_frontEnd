import { Routes } from '@angular/router';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';

export const routes: Routes = [{
    path:'',
    component: LoginFormComponent
}];
