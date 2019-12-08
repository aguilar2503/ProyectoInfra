
import { Routes, RouterModule } from '@angular/router';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const RUTAS: Routes = [
    { path: 'fotos', component: FotosComponent },
    { path: 'carga', component: CargaComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'fotos' }
];


export const APP_ROUTES = RouterModule.forRoot( RUTAS );
