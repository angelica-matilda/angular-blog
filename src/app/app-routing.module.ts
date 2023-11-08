import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CreateComponent } from './create/create.component';
import { IndividualBlogPostComponent } from './individual-blog-post/individual-blog-post.component';

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
    path: "create",
    component: CreateComponent,
  },
  {
    path: 'blog/:id',
    component: IndividualBlogPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
