import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Serie } from './serie';
import { environment } from '../../environments/environment.development';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  
    private seriesUrl = environment.baseUrl + 'series.json';
    constructor(private http: HttpClient) { }

    getSeries(): Observable<Serie[]> {

    return this.http.get<Serie[]>(this.seriesUrl);
    }

    getAverageSeasons(): Observable<number> {
      return this.getSeries().pipe(
        map(series => {
          let sum = 0;
          series.forEach(serie => sum += serie.seasons);
          return sum / series.length;
        })
      );
    }
    
}
