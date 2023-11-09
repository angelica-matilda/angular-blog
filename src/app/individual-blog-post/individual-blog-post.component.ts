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
  comments: string[] = [];
  newComment: string = '';


  constructor(
    private route: ActivatedRoute,
    private BlogPostsService: BlogPostsService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Get the ID from the route
    this.post = this.BlogPostsService.getBlogPostById(id)!; // Retrieve the blog post data from the service
    this.comments = this.post?.comments || [];
  }

  // Call this function when the like button is clicked
  incrementLikes(id: number | undefined): void {
    if (id !== undefined) {
      this.BlogPostsService.incrementLikes(id);
      this.post = this.BlogPostsService.getBlogPostById(id); // Update the post with the updated likes count
    }
  }

  incrementDislikes(id: number | undefined): void {
    if (id !== undefined) {
      this.BlogPostsService.incrementDislikes(id);
      this.post = this.BlogPostsService.getBlogPostById(id); // Update the post with the updated likes count
    }
  }

  addComment(): void {
    if (this.post && this.newComment.trim() !== '') {
      this.BlogPostsService.addComment(this.post.id, this.newComment);
      this.comments = this.post.comments || [];
      this.newComment = ''; // Clear the input field after adding the comment
    }
  }
}
