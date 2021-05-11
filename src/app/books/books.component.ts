import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Post {
  id:number;
  title:string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {

  posts:any = [];
  bookToCart:any = [];
  hidden:boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .subscribe(res => {
        this.posts = res;
      })
  }

  deletePost(id: number) {
    this.posts = this.posts.filter((post: any) => post.id !== id);
  }

  addToCart(id:number, title:string) {
    const book: Post = {
      id: id,
      title: title
    }
    this.bookToCart.unshift(book);
    this.bookToCart.sort((a:any, b:any) => a.id > b.id ? 1 : -1);
    this.hidden = false;
  }

  deletePostFromList(id:number) {
    this.bookToCart = this.bookToCart.filter((post: any) => post.id !== id);
    if (this.bookToCart === []) {
      this.hidden = true;
    }
  }
}
