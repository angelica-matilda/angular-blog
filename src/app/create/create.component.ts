import { Component } from '@angular/core';
import { BlogPost } from '../interface/blog-post';
import { BlogPostsService } from '../services/blog-posts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  // Form fields
  title: string = '';
  body: string = '';
  thumbnailUrl: string = '';

  // Flag to track whether the post is created or not
  postCreated: boolean = false;

  // Constructor to inject the BlogPostsService
  constructor(private blogPostsService: BlogPostsService) {}

  // Handle file change event to display a preview image
  onFileChange(event: any): void {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];

      // Use FileReader to read file data
      const reader = new FileReader();

      reader.onload = (e) => {
        // Set the thumbnailUrl with the data URL
        this.thumbnailUrl = e.target?.result as string;

        // Display the image
        const imgElement = document.getElementById(
          'previewImage'
        ) as HTMLImageElement;
        if (imgElement) {
          imgElement.src = this.thumbnailUrl;
        }
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  }
  // Create a new blog post
  createPost(): void {
    const newPost: BlogPost = {
      id: this.blogPostsService.getNextId(),
      title: this.title,
      thumbnailUrl: this.thumbnailUrl,
      body: this.body,
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    };
    // Add the new blog post using the BlogPostsService
    this.blogPostsService.addBlogPost(newPost);

    // Set the flag to indicate post creation
    this.postCreated = true;
  }
}
