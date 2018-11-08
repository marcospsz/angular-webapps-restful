import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'caleumpic-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Caelum Pic';
  listaFotos ;

  constructor(httpClient: HttpClient) {
    httpClient
    .get('http://localhost:3000/v1/fotos')
    .subscribe(
      (fotosApi) => {
        this.listaFotos = fotosApi;
      }
    );
  }

  ngOnInit() {
  }

}
