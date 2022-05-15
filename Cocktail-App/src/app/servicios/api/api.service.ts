import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlEndPoint: string = 'https://www.thecocktaildb.com/api/'
  //private urlEndPointRandom: string = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  //private urlEndPointFilter: string = 'https://www.thecocktaildb.com/api/'
  constructor(
    private http: HttpClient

  ) { }

  getRandom():Observable<any>{ 
    return this.http.get(this.urlEndPoint+'json/v1/1/random.php');
   }
   getFilter(textToFind):Observable<any>{ 
    return this.http.get(this.urlEndPoint+'json/v1/1/search.php?s='+textToFind);
   }

}
