import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPost } from '../interface/blog-post';
import { AuthenticationService } from '../services/authentication.service';
import { BlogPostsService } from '../services/blog-posts.service';

@Component({
  selector: 'app-individual-blog-post',
  templateUrl: './individual-blog-post.component.html',
  styleUrls: ['./individual-blog-post.component.css'],
})
export class IndividualBlogPostComponent implements OnInit {
  post: BlogPost | null = null;
  comments: string[] = [];
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private BlogPostsService: BlogPostsService,
    private authService: AuthenticationService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Get the ID from the route
    this.post = this.BlogPostsService.getBlogPostById(id)!; // Retrieve the blog post data from the service
    this.comments = this.post?.comments || [];
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  deletePost(id: number): void {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this post?'
    );
    if (isConfirmed) {
      this.BlogPostsService.deletePost(id);
      // Redirect to homepage if deleted post
      this.router.navigate(['/']); 
    }
  }

  incrementLikes(id: number | undefined): void {
    if (id !== undefined) {
      this.BlogPostsService.incrementLikes(id);
      this.post = this.BlogPostsService.getBlogPostById(id); // Update the post with the updated likes count
    }
  }

  incrementDislikes(id: number | undefined): void {
    if (id !== undefined) {
      this.BlogPostsService.incrementDislikes(id);
      this.post = this.BlogPostsService.getBlogPostById(id); 
    }
  }

  addComment(): void {
    if (this.post && this.newComment.trim() !== '') {
      this.BlogPostsService.addComment(this.post.id, this.newComment);
      this.comments = this.post.comments || [];
      this.newComment = ''; // Clear the input field after adding the comment
    }
  }

  deleteComment(commentIndex: number): void {
    if (this.post) {
      this.BlogPostsService.deleteComment(this.post.id, commentIndex);
      this.comments = this.post.comments || [];
    }
  }
}
