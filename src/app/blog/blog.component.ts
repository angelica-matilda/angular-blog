import { Component } from '@angular/core';
import { BlogPostsService } from '../services/blog-posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  constructor(
    private blogPostsService: BlogPostsService,
  ) {}

  blogPosts = this.blogPostsService.getBlogPosts();
}
