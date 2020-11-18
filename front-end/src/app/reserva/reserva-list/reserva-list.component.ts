import { ReservaService } from './../reserva.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.scss']
})
export class ReservaListComponent implements OnInit {

   reservas : any = []

   displayedColumns: string[] = ['cliente', 'telefone', 'hospedes', 'datacheckin', 'datacheckout', 'observacao']
   
  constructor(private reservaSrv : ReservaService) { }

  async ngOnInit(){
      this.reservas = await  this.reservaSrv.listar()
      console.log(this.reservas)
  }

}
