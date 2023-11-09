import { Injectable } from '@angular/core';
import { BlogPost } from '../interface/blog-post'; //interface

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Mystical Allure of 'Where the Crawdads Sing'",
      thumbnailUrl: '../../assets/wherethecrawdadssing.jpeg',
      body: "Prepare to be enchanted as we explore Delia Owens' mesmerizing novel, 'Where the Crawdads Sing'. Nestled within the marshes of North Carolina, this book weaves a tale of a mysterious 'Marsh Girl', the secrets of the swamp, and the connections that transcend time and place. Join us as we unravel the poetic beauty and captivating storytelling that has captivated readers worldwide.",
      creationDate: new Date('2023-11-08'),
      likes: 0,
      dislikes: 0,
      comments: [],
    },
    {
      id: 2,
      title: "Exploring the Wilderness of 'The Great Alone'",
      thumbnailUrl: '../../assets/greatalone.jpeg',
      body: "In this literary adventure, we dive into Kristin Hannah's gripping novel, 'The Great Alone'. Set in the wilds of Alaska, this book takes readers on an unforgettable journey of survival, love, and the untamed beauty of the Last Frontier. Join us as we unravel the story of the Allbright family, their struggles, and the harsh realities of living off the grid in the Alaskan wilderness.",
      creationDate: new Date('2023-11-01'),
      likes: 5,
      dislikes: 1,
      comments: ['This book made me appreciate the wild.', 'Alaska comes alive in this story.'],
    },
    {
      id: 3,
      title: "Nostalgia and New Beginnings in 'Every Summer After'",
      thumbnailUrl: '../../assets/everysummerafter.jpeg',
      body: "Our third journey through the world of literature takes us to the heartwarming story of 'Every Summer After'. In this heartfelt tale, we'll explore the themes of nostalgia, family, and the power of returning to the same place year after year. Join us as we delve into the lives of the characters and the emotional resonance that makes this book a must-read for anyone seeking the joy of rediscovery and the warmth of tradition.",
      creationDate: new Date('2023-10-27'),
      likes: 6,
      dislikes: 0,
      comments: ['I felt like I was reliving my own summer memories.', 'A perfect book for a cozy read.'],
    },
    {
      id: 4,
      title: "A Heartrending Journey Through 'A Little Life'",
      thumbnailUrl: '../../assets/alittlelife.jpeg',
      body: "Prepare to embark on an emotional rollercoaster with Hanya Yanagihara's 'A Little Life.' This novel introduces you to four friends navigating the ups and downs of life in New York City. But at its core, it's a poignant exploration of one man's traumatic past and the enduring bonds of friendship. Join us as we delve into the powerful prose and heart-wrenching narrative that has made 'A Little Life' a contemporary literary sensation.",
      creationDate: new Date('2023-10-19'),
      likes: 9,
      dislikes: 2,
      comments: [],
    },
    {
      id: 5,
      title: "A Thought-Provoking Journey Through '101 Essays That Will Change the Way You Think'",
      thumbnailUrl: '../../assets/101essays.jpeg',
      body: "Delve into the mind-expanding world of Brianna Wiest's '101 Essays That Will Change the Way You Think.' This collection of essays is a captivating exploration of life's complexities, offering fresh perspectives on love, self-discovery, and personal growth. Join us as we embark on a transformative journey through the thought-provoking pages of this book and discover how it can enrich your perspective on life and the human experience.",
      creationDate: new Date('2023-10-17'),
      likes: 6,
      dislikes: 0,
      comments: ['Absolutely life-changing!', 'These essays are a treasure trove of wisdom.'],
    },
    {
      id: 6,
      title: "Unveiling the Glamorous Secrets of 'The Seven Husbands of Evelyn Hugo'",
      thumbnailUrl: '../../assets/evelynhugo.jpeg',
      body: "Step into the dazzling world of Hollywood's golden age with Taylor Jenkins Reid's 'The Seven Husbands of Evelyn Hugo.' This novel tells the captivating story of the iconic Evelyn Hugo, a famous actress who recounts her seven marriages and the hidden truths behind her glamorous facade. Join us as we unravel the tales of love, ambition, and the price of fame that make this book an irresistible page-turner for all generations.",
      creationDate: new Date('2023-09-14'),
      likes: 12,
      dislikes: 3,
      comments: [],
    },
    {
      id: 7,
      title: "Blossoming Through Poetry in 'The Sun and Her Flowers'",
      thumbnailUrl: '../../assets/thesunandherflowers.jpeg',
      body: "Step into the world of Rupi Kaur's 'The Sun and Her Flowers,' a collection of poetry that explores themes of love, loss, healing, and self-empowerment. Kaur's evocative words and illustrations create a tapestry of emotions and experiences that resonate with readers around the world. Join us as we journey through the blooming beauty of this poetic masterpiece and discover the power of words to touch the soul and inspire personal growth.",
      creationDate: new Date('2023-08-10'),
      likes: 15,
      dislikes: 0,
      comments: ['This poetry speaks to my soul.'],
    },
    {
      id: 8,
      title: "Unraveling the Complex Web of Love in 'It Starts with Us'",
      thumbnailUrl: '../../assets/itstartswithus.jpeg',
      body: "Prepare to be swept away by Colleen Hoover's 'It Starts with Us,' a novel that intricately weaves a tale of love, secrets, and forgiveness. This emotional rollercoaster takes you on a journey through the lives of Lily Bloom and Ryle Kincaid, whose love story is both heartwarming and heart-wrenching. Join us as we explore the intricacies of relationships, the power of forgiveness, and the enduring impact of choices in this unforgettable read.",
      creationDate: new Date('2023-07-28'),
      likes: 6,
      dislikes: 4,
      comments: ['I couldn not put it down!', 'Such a powerful story.', 'Just wow.'],
    },
    {
      id: 9,
      title: "Exploring the Timeless Beauty of 'The Picture of Dorian Gray'",
      thumbnailUrl: '../../assets/doriangray.jpeg',
      body: "Step into the world of Oscar Wilde's 'The Picture of Dorian Gray,' a masterpiece of decadence and moral corruption. The novel follows the life of Dorian Gray, a man whose portrait ages while he remains young and beautiful, allowing him to indulge in a life of hedonism without consequence. Join us as we delve into the dark allure of this classic tale, its exploration of vanity, and the consequences of an eternal youth that conceals a sinister secret.",
      creationDate: new Date('2023-07-01'),
      likes: 22,
      dislikes: 5,
      comments: ['Wildes writing is unparalleled.', 'A true classic that never gets old.'],
    },
    {
      id: 10,
      title: "Mastering the Art of 'Not Giving a F*ck' with Mark Manson",
      thumbnailUrl: '../../assets/subtleart.jpeg',
      body: "Discover the unconventional wisdom of Mark Manson's 'The Subtle Art of Not Giving a F*ck.' In a world saturated with self-help advice, this book stands out with its brutally honest approach to life's challenges and how we assign value to them. Join us as we dissect the art of embracing discomfort, prioritizing what truly matters, and living a life free from unnecessary burdens. Get ready to redefine your approach to happiness and success.",
      creationDate: new Date('2023-06-20'),
      likes: 16,
      dislikes: 7,
      comments: ['Life-changing advice!', 'A must-read for everyone.'],
    },
  ];

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostById(id: number): BlogPost | null {
    const post = this.blogPosts.find((p) => p.id === id);
    return post || null;
  }

  incrementLikes(id: number): void {
    const post = this.blogPosts.find((p) => p.id === id);
    if (post) {
      post.likes++; // Increment the likes count for the specified blog post
      this.updateLocalStorage(); // Update local storage
    }
  }

  incrementDislikes(id: number): void {
    const post = this.blogPosts.find((p) => p.id === id);
    if (post) {
      post.dislikes++; // Increment the likes count for the specified blog post
      this.updateLocalStorage(); // Update local storage
    }
  }

  addComment(id: number, comment: string): void {
    const post = this.blogPosts.find((p) => p.id === id);
    if (post) {
      post.comments.push(comment);
      this.updateLocalStorage();
    }
  }

  // Function to update the local storage with the current blog posts data
  private updateLocalStorage(): void {
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  }

  constructor() {
    const storedBlogPosts = localStorage.getItem('blogPosts');
    if (storedBlogPosts) {
      this.blogPosts = JSON.parse(storedBlogPosts);
    }
  }
}
