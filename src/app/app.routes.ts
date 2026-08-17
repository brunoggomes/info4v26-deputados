import { Routes } from '@angular/router';
import { ConsultaDeputados } from './consulta-deputados/consulta-deputados';

export const routes: Routes = [
    {path: 'home', component: ConsultaDeputados},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
