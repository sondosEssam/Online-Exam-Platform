import { Routes } from '@angular/router';

export const studentRoutes: Routes=[
    {path:'student', loadComponent:()=>import('./student').then(m=>m.Student),data:{Breadcrumb:'Home'}, 
        children:[
            {path:'', redirectTo: 'diploma', pathMatch: 'full'},
            {path:'diploma', loadComponent:()=>import('./components/diploma/diploma').then(m=>m.Diploma), data:{Breadcrumb:'Diploma'}},
            {path:'account', loadComponent:()=>import('./components/account/account').then(m=>m.Account), data:{Breadcrumb:'Account'},
            children:[
                    { path: '', redirectTo: 'profile', pathMatch: 'full' },
                    {path:'profile', loadComponent:()=>import('./components/account/profile/profile').then(m=>m.Profile), data:{Breadcrumb:'Profile'}},
                    {path:'changePassword', loadComponent:()=>import('./components/account/chnage-password/chnage-password').then(m=>m.ChnagePassword), data:{Breadcrumb:'Change Password'}}
            ]
        },
        ]
    }
]