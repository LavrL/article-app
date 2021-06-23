import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guards';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'addArticle',
    loadChildren: () => import('../app/articleManagement/article-list.module').then(m => m.ArticleListModule),
    canActivate: [AuthGuard]
  },
  {
    path: ' ', pathMatch: 'full', redirectTo: '/login'
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
