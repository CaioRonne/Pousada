import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaListComponent } from './reserva/reserva-list/reserva-list.component';
import { ReservaFormComponent } from './reserva/reserva-form/reserva-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component'


const routes: Routes = [
    {path: 'reserva', component: ReservaListComponent},
    {path: 'reserva/novo', component: ReservaFormComponent },
    {path: 'reserva/:id', component: ReservaFormComponent },

    {path: 'cliente', component: ClienteListComponent},
    {path: 'cliente/novo', component: ClienteFormComponent},
    {path: 'cliente/:id', component: ClienteFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
