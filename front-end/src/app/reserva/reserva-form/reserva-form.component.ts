import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservaService } from '../reserva.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FuncionarioService } from 'src/app/funcionario/funcionario.service';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss']
})
export class ReservaFormComponent implements OnInit {

reserva : any = {}
funcionarios : any = []

title : string = 'Cadastrar reserva'

  constructor(
    private reservaSrv : ReservaService,
    private funcionarioSrv : FuncionarioService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    if(this.actRoute.snapshot.params['id']) {
      try {     
        this.reserva = await this.reservaSrv.obterUm(this.actRoute.snapshot.params['id'])
        this.title = 'Editando reserva'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível editar os dados!',
          'Ok.', { duration: 5000 })
      }
    }
  }

async carregarDados() {
    try {
      this.funcionarios = await this.funcionarioSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open(`ERRO: não foi possível carregar todos os dados 
        necessários para a página.`, 'Que pena', { duration: 5000 })
    }
  }

  async salvar(form: NgForm) {
    if(form.valid) {
      try {
        if(this.reserva._id) {
          await this.reservaSrv.atualizar(this.reserva) 
        }
        else {
          await this.reservaSrv.novo(this.reserva)
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
