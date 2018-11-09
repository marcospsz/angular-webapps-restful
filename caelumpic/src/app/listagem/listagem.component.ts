import { Foto } from "./../foto/foto";
import { FotoService } from "./../servicos/foto.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "caleumpic-listagem",
  templateUrl: "./listagem.component.html",
  styleUrls: ["./listagem.component.css"]
})
export class ListagemComponent implements OnInit {
  title = "Caelum Pic";
  listaFotos: Foto[] = [];

  constructor(private fotoService: FotoService) {
    this.fotoService.listar().subscribe(fotosApi => {
      this.listaFotos = fotosApi;
    });
  }

  ngOnInit() {}

  excluir(fotoApagada: Foto) {
    this.fotoService
        .deletar(fotoApagada)
        .subscribe(
          () => {
            this.listaFotos = this.listaFotos.filter(foto => foto != fotoApagada);
            console.log(`apagou ${fotoApagada.titulo}`);
        }
    );
  }
}
