import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters$: Observable<any>;
  offset$: Observable<any>;

  constructor(private service: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characters$ = this.service.getAllCharacters();
  }

  

}
