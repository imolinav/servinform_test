import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article;
  id;
  mediaURL;
  articlePic;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.apiService.getArticle(this.id).subscribe((data) => {
      console.log(data);
      this.article = data;
      this.mediaURL = this.article._links['wp:featuredmedia'][0].href;
      console.log(this.mediaURL);

      this.apiService.getArticlePhoto(this.mediaURL).subscribe((mediaData) => {
        this.articlePic = mediaData;
      });
    });
  }

  getDate(article) {
    const date = article.date.split('T');
    const day = date[0].split('-');
    const hour = date[1].split(':');
    return day[2] + '-' + day[1] + '-' + day[0] + ' ' + hour[0] + ':' + hour[1];
  }
}
