import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PortafolioDetalleComponent } from './portafolio-detalle/portafolio-detalle.component';

export const router: Routes = [
    {path: '',redirectTo: 'about',pathMatch:'full'},
    {path: 'about',component: AboutComponent},
    {path: 'services',component: ServicesComponent},
    {path: 'portafolio',component: PortafolioComponent},
    {path: 'portafolio/:id',component: PortafolioDetalleComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);