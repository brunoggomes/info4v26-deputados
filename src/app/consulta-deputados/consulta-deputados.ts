import { Component, inject, signal } from '@angular/core';
import { DeputadoService } from '../deputado-service';
import { Deputado, RespostaApi } from '../deputado';

@Component({
  selector: 'app-consulta-deputados',
  imports: [],
  templateUrl: './consulta-deputados.html',
  styleUrl: './consulta-deputados.scss',
})
export class ConsultaDeputados {
  //Classe de serviço
  readonly #deputadoService = inject(DeputadoService)

  //signal com a lista de deputados
  protected deputados = signal<Deputado[]>([])

  constructor() {
    this.#deputadoService.obterTodos().subscribe(
      res=> {
       this.deputados.set(res.dados)
    })
  }
}
