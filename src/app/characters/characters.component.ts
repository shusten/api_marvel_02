import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters$: Observable<Hero[]>;
  page = 1

  constructor(private service: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(p: number = 1) {
    if (p < 1) {
      p = 1;
      this.page = 1;
    }
    this.characters$ = this.service.getAllCharacters(p);
  }

  onNext() {
    this.page++;
    this.getCharacters(this.page);
  }

  onPrevious() {
    this.page--;
    this.getCharacters(this.page);
  }
}
