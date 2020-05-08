import { Component, OnInit } from '@angular/core';


import {ArticleService} from '../services/article.service';
import {Article} from '../shared/article';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles : Article[];
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles()
    .subscribe(articles => this.articles =articles);
  }

}
