export const studentRoutes=[
    {path:'student', loadComponent:()=>import('./student').then(m=>m.Student), 
        children:[
            {path:'diploma', loadComponent:()=>import('./components/diploma/diploma').then(m=>m.Diploma)},
            {path:'account', loadComponent:()=>import('./components/account/account').then(m=>m.Account)},
            // {path:'student', loadComponent:()=>import('./student').then(m=>m.Student)},
            // {path:'student', loadComponent:()=>import('./student').then(m=>m.Student)},
        ]
    }
]