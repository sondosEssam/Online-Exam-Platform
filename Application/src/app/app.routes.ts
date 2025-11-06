import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadComponent: () => import('./features/auth/auth').then(m => m.Auth)},
    {path:'login', loadComponent: () => import('./features/auth/components/login/login').then(m => m.Login)},
    {path:'register', loadComponent: () => import('./features/auth/components/register/register').then(m => m.Register)},
    {path:'forgot-password', loadComponent: () => import('./features/auth/components/forget-password/forget-password').then(m => m.ForgetPassword)},
    {path:'**', redirectTo: ''},
];
