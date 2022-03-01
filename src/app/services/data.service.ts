import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { $ } from 'protractor';

import { IPokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getOriginalPokemon(): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  }

  getPokemonProfile(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
