import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../interface/blog-post';
import { BlogPostsService } from '../services/blog-posts.service';

@Component({
  selector: 'app-individual-blog-post',
  templateUrl: './individual-blog-post.component.html',
  styleUrls: ['./individual-blog-post.component.css'],
})
export class IndividualBlogPostComponent implements OnInit {
  post: BlogPost | null = null;

  constructor(
    private route: ActivatedRoute,
    private BlogPostsService: BlogPostsService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Get the ID from the route
    this.post = this.BlogPostsService.getBlogPostById(id)!; // Retrieve the blog post data from the service
}
}
