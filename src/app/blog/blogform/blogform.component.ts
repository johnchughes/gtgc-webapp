import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { FormBuilder } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})
export class BlogformComponent implements OnInit {

  post : Post = new Post("", "");
  postForm;

  constructor(private formBuilder: FormBuilder, private postService : PostService) { 
    this.postForm = this.formBuilder.group(this.post);

  }

  ngOnInit() {
  }

  onFormSubmit($event) {
    Object.assign(this.post, $event);
    this.post.Slug = this.post.Title.replace(/\s+/g, '-').toLowerCase();
    this.post.DateCreated = new Date();
    this.postService.create(this.post);
  }

}
