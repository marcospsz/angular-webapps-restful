import { Foto } from './../foto/foto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'caleumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  foto = new Foto();

  constructor() { }

  ngOnInit() {
  }

  salvar(){

    console.log(this.foto)
  }

}
