import { Component, OnInit, Input } from '@angular/core';
import { Pokedex } from '../pokedex.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  @Input('thing') thing: string;
  @Input('pokedex') pokedex: Pokedex;

  constructor() {
  }

  ngOnInit() {
  }

}
