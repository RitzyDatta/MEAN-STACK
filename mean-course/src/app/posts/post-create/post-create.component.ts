// import { Component, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // template driven form
// import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  // enteredValue='';

  // newPost = '';
  enteredContent = '';
  enteredTitle = '';
 // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) {}

  onAddpost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    /*
    const post: Post = {
    /*  title: form.value.title, // value is the "name" tag which is defined in html component
      content: form.value.content
      title: form.value.title,
      content: form.value.content,
    }; */
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
   // this.postCreated.emit(post);






    // this.newPost=this.enteredValue;
  // this.newPost=postInput.value;
    // this.newPost = 'stand up for yourself';
  }
}
