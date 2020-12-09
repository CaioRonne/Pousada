import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservaListComponent } from './reserva/reserva-list/reserva-list.component';
import { ReservaFormComponent } from './reserva/reserva-form/reserva-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { FuncionarioListComponent } from './funcionario/funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './funcionario/funcionario-form/funcionario-form.component';
import { QuartoListComponent } from './quarto/quarto-list/quarto-list.component';
import { QuartoFormComponent } from './quarto/quarto-form/quarto-form.component'




const routes: Routes = [
    {path: 'reserva', component: ReservaListComponent},
    {path: 'reserva/novo', component: ReservaFormComponent },
    {path: 'reserva/:id', component: ReservaFormComponent },

    {path: 'cliente', component: ClienteListComponent},
    {path: 'cliente/novo', component: ClienteFormComponent},
    {path: 'cliente/:id', component: ClienteFormComponent},

    {path: 'funcionario', component: FuncionarioListComponent},
    {path: 'funcionario/novo', component: FuncionarioFormComponent},
    {path: 'funcionario/:id', component: FuncionarioFormComponent},

    {path: 'quarto', component: QuartoListComponent},
    {path: 'quarto/novo', component: QuartoFormComponent},
    {path: 'quarto/:id', component: QuartoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
