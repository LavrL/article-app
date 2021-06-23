import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(public article: ArticleService) { }

  ngOnInit(): void {
  }

}
