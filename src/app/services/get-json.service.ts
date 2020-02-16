import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor(private http: HttpClient) { 
  }

  public getHomeJSON(): Observable<any> {
    return this.http.get("./assets/home.json");
  }

  public getResultJSON(id): Observable<any> {
    return this.http.get(`./assets/result-${id}.json`);
  }
}
