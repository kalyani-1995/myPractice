import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AddcircleComponent } from './addcircle/addcircle.component';
import { TestComponent } from './test/test.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path : '', component: LandingComponent},
    {path : 'home',component: HomeComponent},
    {path : 'addcircle',component: AddcircleComponent},
    {path : 'landing',component: LandingComponent},
    {path : 'test',component:TestComponent},
    {path : '**',component:PagenotfoundComponent}   //wildcard routing when path is not knowns
];
