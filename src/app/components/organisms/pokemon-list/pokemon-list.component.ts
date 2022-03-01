import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})

export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  page = 1;
  totalPokemons: number;

  constructor(private dataService: DataService) { }

  activateClass(subModule){
    subModule.active = !subModule.active;    
  }

  ngOnInit(): void  {
    this.getOriginalPokemon();
  }

  getOriginalPokemon() {
    this.dataService.getOriginalPokemon()
    .subscribe((response: any) => {
        this.totalPokemons = response.results.length;
        response.results.sort((a, b) => a.name.localeCompare(b.name));
        response.results.forEach(result => {
          this.dataService.getPokemonProfile(result.name).subscribe((pokemonItem: any) => {
          this.pokemons.push(pokemonItem);
        });
      });
    });
  }
}
