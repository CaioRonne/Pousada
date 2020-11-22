import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

   clientes : any = []

   displayedColumns: string[] = ['cliente', 'telefone', 'email', 'nascimento', 'editar', 'excluir']
   
  constructor(
      private clienteSrv : ClienteService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit(){
      this.clientes = await  this.clienteSrv.listar()
      console.log(this.clientes)
  }

 async excluir(id: string) {
    if(confirm('Tem certeza que deseja excluir o cadastro?')) {
      try {
        await this.clienteSrv.excluir(id)
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

