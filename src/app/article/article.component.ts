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

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    /*this.route.paramMap.subscribe(params => {
      console.log(params);
      this.id = params;
    });*/

    this.apiService.getArticle(this.id).subscribe((data) => {
      console.log(data);
      this.article = data;
    });
  }

}
