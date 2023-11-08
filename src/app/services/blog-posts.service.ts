import { Injectable } from '@angular/core';
import { BlogPost } from '../interface/blog-post'; //interface

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Exploring the Wilderness of 'The Great Alone'",
      thumbnailUrl: '../../assets/thegreatalone.jpeg',
      body: "In our first literary adventure, we dive into Kristin Hannah's gripping novel, 'The Great Alone'. Set in the wilds of Alaska, this book takes readers on an unforgettable journey of survival, love, and the untamed beauty of the Last Frontier. Join us as we unravel the story of the Allbright family, their struggles, and the harsh realities of living off the grid in the Alaskan wilderness.",
      creationDate: new Date('2023-11-01'),
      likes: 10,
      dislikes: 2,
      comments: ['Comment 1', 'Comment 2'],
    },
    {
      id: 2,
      title: "The Mystical Allure of 'Where the Crawdads Sing'",
      thumbnailUrl: '../../assets/thegreatalone.jpeg',
      body: "Prepare to be enchanted as we explore Delia Owens' mesmerizing novel, 'Where the Crawdads Sing'. Nestled within the marshes of North Carolina, this book weaves a tale of a mysterious 'Marsh Girl', the secrets of the swamp, and the connections that transcend time and place. Join us as we unravel the poetic beauty and captivating storytelling that has captivated readers worldwide.",
      creationDate: new Date('2023-11-05'),
      likes: 5,
      dislikes: 1,
      comments: ['Comment 3', 'Comment 4'],
    },
    {
      id: 3,
      title: "Nostalgia and New Beginnings in 'Every Summer After'",
      thumbnailUrl: '../../assets/thegreatalone.jpeg',
      body: "Our third journey through the world of literature takes us to the heartwarming story of 'Every Summer After'. In this heartfelt tale, we'll explore the themes of nostalgia, family, and the power of returning to the same place year after year. Join us as we delve into the lives of the characters and the emotional resonance that makes this book a must-read for anyone seeking the joy of rediscovery and the warmth of tradition.",
      creationDate: new Date('2023-11-05'),
      likes: 5,
      dislikes: 0,
      comments: ['Comment 3', 'Comment 4'],
    },
  ];

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostById(id: number): BlogPost | null {
    const post = this.blogPosts.find((p) => p.id === id);
    return post || null;
  }

  constructor() {}
}
