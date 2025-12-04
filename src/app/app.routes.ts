import { Routes } from '@angular/router';
import { Home } from './home/page/home';
import { Portfolio } from './portfolio/page/portfolio';
import { Blog } from './blog/page/blog';
import { Contacto } from './contacto/page/contacto';
import { Experiencia } from './experiencia/experiencia';

export const routes: Routes = [
    {
        path: '',
        component:Home
        
    },
    {
        path: 'experiencia',
        component: Experiencia
    },
    {
        path: 'portafolio',
        component: Portfolio
    },
    {
        path: 'blog',
        component: Blog
    },
    {
        path: 'contactame',
        component: Contacto
    },
     {
        path: '**',
        redirectTo: '',pathMatch: 'full'
    }
];
