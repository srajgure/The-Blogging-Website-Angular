import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
import {Article} from '../shared/article';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  

  constructor(private http: HttpClient,private processHTTPMsgService: ProcessHTTPMsgService) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/articles')
    .pipe(
      catchError(error => { return this.processHTTPMsgService.handleError(error);})
    );
  }
  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>('http://localhost:3000/articles/' + id)
    .pipe(
      catchError(error => { return this.processHTTPMsgService.handleError(error);})
    );
  }

  PostArticle (article: any): Observable<Article> {
    return this.http.post<Article>('http://localhost:3000/articles', article, httpOptions)
      .pipe(
        catchError(error => { return this.processHTTPMsgService.handleError(error);})
      );
  }
}
