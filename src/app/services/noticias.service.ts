import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseTopHeadlines } from '../interfaces/interfaces';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-Key': apiKey
})

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  // <T> esto quiere decir, que aqui voy a recibir un tipo y la respuesta va a ser de ese tipo
  private getQuery<T>(query: string) {

    query = apiUrl + query;
    return this.http.get<T>( query, { headers:  headers } );

  }

  getTopHeadlines() {

    return this.getQuery<ResponseTopHeadlines>(`/top-headlines?country=us`)
    // return this.http.get<ResponseTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=268593c3bd35491da12fc3b003062068`)
  }

  getTopHeadlinesCategory( categoria: string) {
    return this.getQuery<ResponseTopHeadlines>(`/top-headlines?country=us&category=${categoria}`)
  }
}
