import { QuartoService } from './../quarto.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quarto-list',
  templateUrl: './quarto-list.component.html',
  styleUrls: ['./quarto-list.component.scss']
})
export class QuartoListComponent implements OnInit {

   quartos : any = []

   displayedColumns: string[] = ['numero', 'reserva', 'editar', 'excluir']
   
  constructor(
      private quartoSrv : QuartoService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit(){
      this.quartos = await  this.quartoSrv.listar()
      console.log(this.quartos)
  }

 async excluir(id: string) {
    if(confirm('Tem certeza que deseja excluir o cadastro?')) {
      try {
        await this.quartoSrv.excluir(id)
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

