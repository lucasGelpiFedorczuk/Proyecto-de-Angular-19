import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroPage } from './pages/hero/hero-page/hero-page';
import { DragonballPage } from './pages/dragonball/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super/dragonball-page/dragonball-super-page';

export const routes: Routes = [

    {
        path: '',
        component: CounterComponent
    },
    {
        path: 'hero',
        component: HeroPage
    },
    {
        path: 'dragonball',
        component: DragonballPage
    },
    {
        path: 'dragonball-super',
        component: DragonballSuperPage
    },
    {
        path: '**',
        redirectTo: ''
    },

];
