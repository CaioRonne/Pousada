import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaListComponent } from './reserva/reserva-list/reserva-list.component';
import { ReservaFormComponent } from './reserva/reserva-form/reserva-form.component'

const routes: Routes = [
    {path: 'reserva', component: ReservaListComponent},
    { path: 'reserva/reserva', component: ReservaFormComponent },
    { path: 'reserva/:id', component: ReservaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
