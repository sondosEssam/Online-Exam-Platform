import { authGuard } from '../../core/guards/auth-guard';
import { loggedInGuard } from '../../core/guards/logged-in-guard';
import { Routes } from '@angular/router';
export const authRoutes: Routes = [ 
    {path:'auth', loadComponent: () => import('./auth').then(m => m.Auth), 
        
        children: [
            {path:'', redirectTo: 'login', pathMatch: 'full'},
            {path:'login', loadComponent: () => import('./components/login/login').then(m => m.Login)},
            {path:'register', loadComponent: () => import('./components/register/register').then(m => m.Register)},
            {path:'forgot-password', loadComponent: () => import('./components/forget-password/forget-password').then(m => m.ForgetPassword)},  
        ]    }
]