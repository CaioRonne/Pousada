import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../cliente.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

cliente : any = {}

title : string = 'Cadastrar cliente'

  constructor(
    private clienteSrv : ClienteService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    if(this.actRoute.snapshot.params['id']) {
      try {     
        this.cliente = await this.clienteSrv.obterUm(this.actRoute.snapshot.params['id'])
        this.title = 'Editando cliente'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível editar os dados!',
          'Ok.', { duration: 5000 })
      }
    }
  }

  async salvar(form: NgForm) {
    if(form.valid) {
      try {
        if(this.cliente._id) {
          await this.clienteSrv.atualizar(this.cliente) 
        }
        else {
          await this.clienteSrv.novo(this.cliente)
        }
        this.snackBar.open('Os dados foram salvos!', 'Ok.',
          { duration: 5000 })
        this.location.back()
      }
      catch (erro) {
        console.log(erro)
        this.snackBar.open('ERRO: os dados não foram salvos!', 'F',
          { duration: 5000 })
      }
      
    }
  }

  voltar(form: NgForm) {
    let result = true
    if(form.dirty && form.touched) {
      result = confirm('Deseja voltar? É possível que as alterações feitas não sejam salvas.')
    }

    if(result) this.location.back()

  }

}
