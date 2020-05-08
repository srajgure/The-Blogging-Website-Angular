import { Routes } from '@angular/router';

import { ArticlesComponent } from '../articles/articles.component';
import { HomeComponent } from '../home/home.component';
import { ArticledetailsComponent } from '../articledetails/articledetails.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'articles',     component: ArticlesComponent },
  { path: 'articledetails', component:ArticledetailsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];