import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaListComponent } from './reserva/reserva-list/reserva-list.component';

const routes: Routes = [
    {path: 'reserva', component: ReservaListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
