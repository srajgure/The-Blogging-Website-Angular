import { Component, OnInit,Inject} from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Article } from '../shared/article';
import { stringify } from 'querystring';


@Component({
  selector: 'app-articledetails',
  templateUrl: './articledetails.component.html',
  styleUrls: ['./articledetails.component.scss']
})
export class ArticledetailsComponent implements OnInit {

  article: Article;
  
  constructor(private articleservice: ArticleService,
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit() {

      this.route.params.pipe(switchMap((params: Params) => this.articleservice.getArticle(params['id'])))
      .subscribe(article => this.article = article);
      // console.log(article);
    }
  
    goBack(): void {
    this.location.back();

    }

}
