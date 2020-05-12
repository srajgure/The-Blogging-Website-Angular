import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  article = {title: '', description: ''};
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log('Article: ', this.article);
    this.articleService.PostArticle(this.article)
      .subscribe(article => this.article = article);
  }
    
}

