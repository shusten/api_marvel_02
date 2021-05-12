import { Component } from '@angular/core';
import { CharactersService } from './services/characters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title   = 'MARVEL';
  search$ = this.characterService.search$

  constructor(public characterService: CharactersService) {}
    doSearch(event) {
    this.search$.next(event.target.value);
}
}
