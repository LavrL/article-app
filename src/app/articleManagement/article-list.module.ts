import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './articleContent/article/article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleAddComponent } from './article-add/article-add.component';
import { RouterModule } from '@angular/router';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './articleContent/article-list/article-list.component';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleAddComponent,
    ArticleListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ArticleRoutingModule
  ],
  exports: [
    ArticleComponent,
    ArticleAddComponent
  ]
})
export class ArticleListModule { }
