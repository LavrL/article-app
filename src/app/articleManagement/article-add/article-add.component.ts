import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleAddComponent implements OnInit {
  public postTitle: string;
  public postContent: string;
  public postDate: Date;
  public postId = 0;

  public clickedID: string;
  public articleForm: FormGroup;
  public submitted = false;

  get f(): any {
    return this.articleForm.controls;
  }

  addNewArticle() {
    this.submitted = true;
    if (this.articleForm.invalid) {
      return;
    } else {
      this.postId = this.postId + 1;
      const cont = {
        id: this.postId,
        title: this.articleForm.controls.title.value,
        content: this.articleForm.controls.content.value,
        date: this.articleForm.controls.selectedDate.value
      };
      this.article.articleList.push(cont);
      this.submitted = false;
      this.articleForm.reset();
    }
  }

  constructor(private formBuilder: FormBuilder, public article: ArticleService) { }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      selectedDate: [null, Validators.required]
    });
  }

}
