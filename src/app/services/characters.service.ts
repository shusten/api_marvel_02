import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { delay, map, switchMap, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Hero } from '../models/hero'
import { HeroThumbnail } from '../models/hero-thumbnail'
import { HeroSubItems } from '../models/hero-sub-items'
import { HeroSubItem } from '../models/hero-sub-item'

const LIMIT_LOW = 10;
const LIMIT_MID = 25;
const LIMIT_HIGH = 100;
const LIMITS = [LIMIT_LOW, LIMIT_MID, LIMIT_HIGH];

const DEFAULT_SEARCH = '';
const DEFAULT_PAGE = 0;

@Injectable({
  providedIn: 'root'
})


export class CharactersService {
  limits = LIMITS;

  private readonly API = `${environment.MARVEL_API.URL}`;

 
  characters$: Observable<any>;
  

  constructor(private http: HttpClient) { }

  search$ = new BehaviorSubject(DEFAULT_SEARCH);
    page$   = new BehaviorSubject(DEFAULT_PAGE);
    limit$  = new BehaviorSubject(LIMIT_HIGH);



  getAllCharacters(): Observable<any>{
    return this.characters$ = combineLatest([this.search$, this.page$, this.limit$])
      .pipe(
        switchMap(([search, page, limit]) => {
          const params: any = {
            apikey: environment.MARVEL_API.API_KEY,
            hash: environment.MARVEL_API.HASH,
            limit: `${limit}`,
            offset: `${page * limit}`, // page * limit
          };
          if (search) {
            params.nameStartsWith = search;
          }
          return this.http.get(this.API, { params });
        }),
        map((res: any) => res.data.results)
      );


  }

}
