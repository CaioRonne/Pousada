import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FuncionarioService } from '../funcionario.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.scss']
})
export class FuncionarioFormComponent implements OnInit {

funcionario : any = {}

title : string = 'Cadastrar funcionario'

  constructor(
    private funcionarioSrv : FuncionarioService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    if(this.actRoute.snapshot.params['id']) {
      try {     
        this.funcionario = await this.funcionarioSrv.obterUm(this.actRoute.snapshot.params['id'])
        this.title = 'Editando funcionario'
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
        if(this.funcionario._id) {
          await this.funcionarioSrv.atualizar(this.funcionario) 
        }
        else {
          await this.funcionarioSrv.novo(this.funcionario)
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
