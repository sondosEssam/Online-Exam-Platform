import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', loadChildren: () => import('./features/auth/components/login/login').then(m => m.Login)},
];
