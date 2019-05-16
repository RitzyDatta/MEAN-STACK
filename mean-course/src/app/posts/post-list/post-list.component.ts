import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl : './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})

export class PostListComponent implements OnInit, OnDestroy {

  /*
  posts= [
    {title: 'First Post', content: 'This is the first content'},
    {title: 'Second Post', content: 'This is the second content'},
    {title: 'Third Post', content: 'This is the third content'},
  ];
  */

  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {

  } // this public keyword is typescript feature, by doing this it will create a new property "postsService"
    // in this component and stored incomming value in that property

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    // Observers are also called listeners (or consumers) as they can listen or subscribe to get the observed data.
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[]) => {
        this.posts = posts;
    });
  }
  ngOnDestroy(){
    this.postsSub.unsubscribe(); // this will prevent memory leak
  }

}
