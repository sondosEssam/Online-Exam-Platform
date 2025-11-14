export const authRoutes = [ 
    {path:'auth', loadComponent: () => import('./auth').then(m => m.Auth), 
        children: [
            {path:'login', loadComponent: () => import('./components/login/login').then(m => m.Login)},
            {path:'register', loadComponent: () => import('./components/register/register').then(m => m.Register)},
            {path:'forgot-password', loadComponent: () => import('./components/forget-password/forget-password').then(m => m.ForgetPassword)},  
        ]
    },
]