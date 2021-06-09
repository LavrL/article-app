import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'addArticle',
    loadChildren: () => import('../app/articleManagement/article-list.module')
      .then(m => m.ArticleListModule)
  },
  {
    path: '**', redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
