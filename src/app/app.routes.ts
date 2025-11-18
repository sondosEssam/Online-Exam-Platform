import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routers';
import { studentRoutes } from './features/student/student.routes';
export const routes: Routes = [
    {path:'', redirectTo: 'auth/login', pathMatch: 'full'},
    ...authRoutes,
    ...studentRoutes
];
