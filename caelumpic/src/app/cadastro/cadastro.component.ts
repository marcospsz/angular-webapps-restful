import { FotoService } from "./../servicos/foto.service";
import { Foto } from "./../foto/foto";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "caleumpic-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  foto = new Foto();

  constructor(private fotoService: FotoService,
              private roteador: Router) {

  }

  salvar(){
    this
      .fotoService
      .cadastrar(this.foto)
      .subscribe(
        () => {
          this.roteador.navigate([''])
        },
        erro => console.log(erro),
        () => console.log('Completou')
      )
  }

  ngOnInit() {}
}
