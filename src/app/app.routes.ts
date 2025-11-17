import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routers';
export const routes: Routes = [
    {path:'', redirectTo: 'auth/login', pathMatch: 'full'},
    ...authRoutes,
    {path:'dashborad/student', loadComponent: () => import('./features/student/student').then(m => m.Student)},
];
