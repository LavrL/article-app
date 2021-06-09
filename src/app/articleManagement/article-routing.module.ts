import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleAddComponent } from './article-add/article-add.component';

const routes: Routes = [
  {
    path: '', component: ArticleAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
