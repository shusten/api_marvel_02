import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})


export class CharactersService {

  private readonly API = `${environment.MARVEL_API.URL}`;

 

  

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any>{

    return this.http.get(this.API,{
      params: {
          apikey: environment.MARVEL_API.API_KEY,
          hash: environment.MARVEL_API.HASH,
          limit: `${30}`,
          nameStartsWith: 'iron', 
          offset: `${0}`, 
      },
  })
    .pipe(
      map(
      (data: any) => data.data.results))
  }

}
