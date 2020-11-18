import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.scss']
})
export class ReservaFormComponent implements OnInit {

reserva : any = {}

title : string = 'Cadastrar reserva'

  constructor() { }

  ngOnInit(): void {
  }

}
