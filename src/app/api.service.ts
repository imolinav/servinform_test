import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getNews() {
    return this.httpClient.get('https://www.circuitricardotormo.com/wp-json/wp/v2/posts?page=1&per_page=15&_embed');
  }

  public getArticle(id) {
    return this.httpClient.get('https://www.circuitricardotormo.com/wp-json/wp/v2/posts/' + id + '?_embedbed');
  }

  public getArticlePhoto(url) {
    return this.httpClient.get(url);
  }
}
