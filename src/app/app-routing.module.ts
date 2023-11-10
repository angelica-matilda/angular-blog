import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CreateComponent } from './create/create.component';
import { IndividualBlogPostComponent } from './individual-blog-post/individual-blog-post.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    component: BlogComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: 'blog/:id',
    component: IndividualBlogPostComponent,
  },
  {
    path: "create",
    component: CreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
