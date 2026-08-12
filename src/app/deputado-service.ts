import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { RespostaApi } from './deputado';

@Service()
export class DeputadoService {
    readonly APIURL = 'https://dadosabertos.camara.leg.br/api/v2'
    readonly #http = inject(HttpClient)

    obterTodos(): Observable<RespostaApi> {
        return this.#http.get<RespostaApi>(
            `${this.APIURL}/deputados?ordem=ASC&ordenarPor=nome`)
    }

    obterPorNome(nome: string) {
        
    }
}
