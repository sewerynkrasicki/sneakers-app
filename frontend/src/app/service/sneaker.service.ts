import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sneaker} from "../model/sneaker";

@Injectable({
  providedIn: 'root'
})
export class SneakerService {
  URL = 'http://localhost:8080/api/sneakers'
  constructor(private http: HttpClient) { }

  getAllSneakers(): Observable<Object> {
    return this.http.get(`${this.URL}`);
  }

  getSneakerById(id: Number): Observable<Object> {
    return this.http.get(`${this.URL}/${id}`)
  }

  createNewSneaker(sneaker: Sneaker): Observable<Object> {
    return this.http.post(`${this.URL}`, sneaker);
  }

  updateSneaker(sneaker: Sneaker): Observable<Object>{
    return this.http.put(`${this.URL}/${sneaker.id}`, Sneaker);
  }

  deleteSneaker(id: Number): Observable<Object>{
    return this.http.delete(`${this.URL}/${id}`)
  }
}
