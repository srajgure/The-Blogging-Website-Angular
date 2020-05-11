import { Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';
import { ArticlesComponent } from '../articles/articles.component';
import { HomeComponent } from '../home/home.component';
import { ArticledetailsComponent } from '../articledetails/articledetails.component';
import { PostComponent} from '../post/post.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'articles',     component: ArticlesComponent },
  { path: 'articledetails/:id', component:ArticledetailsComponent},
  { path: 'post', component:PostComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];