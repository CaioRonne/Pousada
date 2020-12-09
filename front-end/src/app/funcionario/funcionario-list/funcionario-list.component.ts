import { FuncionarioService } from './../funcionario.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements OnInit {

   funcionarios : any = []

   displayedColumns: string[] = ['funcionario', 'cargo', 'telefone']
   
  constructor(
      private funcionarioSrv : FuncionarioService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit(){
      this.funcionarios = await  this.funcionarioSrv.listar()
      console.log(this.funcionarios)
  }

 async excluir(id: string) {
    if(confirm('Tem certeza que deseja excluir o cadastro?')) {
      try {
        await this.funcionarioSrv.excluir(id)
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

