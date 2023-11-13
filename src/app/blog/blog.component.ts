import { Component } from '@angular/core';
import { BlogPostsService } from '../services/blog-posts.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  constructor(
    private blogPostsService: BlogPostsService,
    private authService: AuthenticationService,
  ) {}

  blogPosts = this.blogPostsService.getBlogPosts();

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
