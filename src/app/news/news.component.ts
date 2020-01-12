import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles;
  date;
  day;
  hour;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getNews().subscribe((data) => {
      console.log(data);
      this.articles = data;
    });
  }

  getPhoto(article) {
    return article._embedded['wp:featuredmedia'][0].source_url;
  }

  getDate(article) {
    this.date = article.date.split('T');
    this.day = this.date[0].split('-');
    this.hour = this.date[1].split(':');
    return this.day[2] + '-' + this.day[1] + '-' + this.day[0] + ' ' + this.hour[0] + ':' + this.hour[1];
  }

}
