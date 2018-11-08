import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'caleumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  salvar(){

    console.log('Clicou')
  }

}
