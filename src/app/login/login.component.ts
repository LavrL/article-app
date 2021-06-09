import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.controls['email'].value === 'test@test.com' && this.loginForm.controls['password'].value === '1234') {
      this.router.navigate(['/addArticle']);
    } else {
      this.credentialsValid = false;
    }
  }
}
