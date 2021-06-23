import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  credentialsValid = true;

  get f(): any {
    return this.loginForm.controls;
  }

  constructor(private router: Router, private formBuilder: FormBuilder, public articleService: ArticleService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.articleService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)) {
      this.router.navigate(['/addArticle']);
      this.articleService.loggedIn = true;
    } else {
      this.articleService.loggedIn = false;
      this.credentialsValid = false;
    }
  }
}
