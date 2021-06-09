import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './articleList/article/article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleAddComponent } from './article-add/article-add.component';
import { RouterModule } from '@angular/router';
import { ArticleRoutingModule } from './article-routing.module';


@NgModule({
  declarations: [
    ArticleComponent,
    ArticleAddComponent
  ],
  imports: [
    FormsModule,
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
