import { ReservaService } from './../reserva.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.scss']
})
export class ReservaListComponent implements OnInit {

   reservas : any = []

   displayedColumns: string[] = ['cliente', 'hospedes', 'datacheckin', 'datacheckout', 'funcionario', 'observacao', 'editar', 'excluir']
   
  constructor(
      private reservaSrv : ReservaService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit(){
      this.reservas = await  this.reservaSrv.listar()
      console.log(this.reservas)
  }

 async excluir(id: string) {
    if(confirm('Tem certeza que deseja excluir o cadastro?')) {
      try {
        await this.reservaSrv.excluir(id)
        this.ngOnInit()
        this.snackBar.open('Cadastro excluído!', 'OK', {
          duration: 7000 
        })
      }
      catch(erro) {
        this.snackBar.open('ERRO: o cadastro não foi excluído!', 'OK!', {
          duration: 7000 
        })
        console.log(erro)
      }
    }
  }

}
