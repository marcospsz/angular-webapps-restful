import { FotoService } from "./../servicos/foto.service";
import { Foto } from "./../foto/foto";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "caleumpic-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  foto = new Foto();
  formCadastro: FormGroup;
  titulo = new FormControl('', Validators.compose([
                                              Validators.required,
                                              Validators.minLength(5)
                                            ])
              );
  url = new FormControl('', Validators.required);

  constructor(private fotoService: FotoService,
              private roteador: Router,
              private rotaAtivada: ActivatedRoute,
              private formBuilder: FormBuilder
              ) {

  }

  ngOnInit() {

    this.formCadastro = this.formBuilder.group({
      titulo : this.titulo,
      url: this.url,
      descricao: ''
    });

    let fotoId = this.rotaAtivada.snapshot.params.fotoId;

    if(fotoId){

      this
        .fotoService
        .buscar(fotoId)
        .subscribe(
          (fotoApi) =>{
            this.foto = fotoApi;
            this.formCadastro.patchValue(fotoApi);
          }
        )

      }
  }

  salvar(){

    this.foto = {...this.foto, ...this.formCadastro.value};

    if(this.foto._id){

      this
        .fotoService.editar(this.foto)
        .subscribe(
          ()=>{this.roteador.navigate([''])
          }
        )
    }
    else{

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

  }

}
