
export const studentRoutes=[
    {path:'student', loadComponent:()=>import('./student').then(m=>m.Student),data:{Breadcrumb:'Home'}, 
        children:[
            {path:'diploma', loadComponent:()=>import('./components/diploma/diploma').then(m=>m.Diploma), data:{Breadcrumb:'Diploma'}},
            {path:'account', loadComponent:()=>import('./components/account/account').then(m=>m.Account), data:{Breadcrumb:'Account'}},
            // {path:'student', loadComponent:()=>import('./student').then(m=>m.Student)},
            // {path:'student', loadComponent:()=>import('./student').then(m=>m.Student)},
        ]
    }
]