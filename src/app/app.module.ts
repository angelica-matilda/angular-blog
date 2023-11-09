import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndividualBlogPostComponent } from './individual-blog-post/individual-blog-post.component';
import { BlogPostsService } from './services/blog-posts.service';
import { SliceWordsPipe } from './slice-bodytext.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    AboutComponent,
    CreateComponent,
    IndividualBlogPostComponent,
    SliceWordsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [BlogPostsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
