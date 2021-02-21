import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<ResponseTopHeadlines>(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=268593c3bd35491da12fc3b003062068`)
  }
}
