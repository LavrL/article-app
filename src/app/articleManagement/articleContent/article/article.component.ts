import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  @Input()
  id: number;

  @Input()
  title: string;

  @Input()
  excerpt: string;

  @Input()
  publishedDate: Date;

  public clickedID: number;
  public showHide = false;

  constructor() { }

  ngOnInit(): void {
  }

}
