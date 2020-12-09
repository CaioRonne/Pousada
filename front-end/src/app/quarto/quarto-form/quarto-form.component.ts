import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuartoService } from '../quarto.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quarto-form',
  templateUrl: './quarto-form.component.html',
  styleUrls: ['./quarto-form.component.scss']
})
export class QuartoFormComponent implements OnInit {

quarto : any = {}

title : string = 'Cadastrar quarto'

  constructor(
    private quartoSrv : QuartoService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    if(this.actRoute.snapshot.params['id']) {
      try {     
        this.quarto = await this.quartoSrv.obterUm(this.actRoute.snapshot.params['id'])
        this.title = 'Editando quarto'
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
        if(this.quarto._id) {
          await this.quartoSrv.atualizar(this.quarto) 
        }
        else {
          await this.quartoSrv.novo(this.quarto)
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
