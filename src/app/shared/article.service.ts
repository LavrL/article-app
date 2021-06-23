import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public articleList = [];
  public loggedIn = false;

  constructor() { }

  login(username: string, pass: string): boolean {
    if ((username === 'test@test.com') && (pass === '1234')) {
      this.loggedIn = true;
      return true;
    } else
      return false
  }
}
