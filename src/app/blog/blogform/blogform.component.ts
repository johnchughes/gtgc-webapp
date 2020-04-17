import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Post } from 'src/models/post';
import { FormBuilder } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})
export class BlogformComponent implements OnInit {

  @Input() post : Post;
  @Output() onSubmit = new EventEmitter<Post>();

  content:string;
  options : Object = {
    height:500,
    plugins: [ 'image' ]
  };

  postForm;

  constructor(private formBuilder: FormBuilder, private postService : PostService) { 
    
  }

  ngOnInit() {
    this.postForm = this.formBuilder.group(this.post);
    this.content = this.post.Content;
  }

  onFormSubmit($event) {
    Object.assign(this.post, $event);
    this.post.Slug = this.post.Title.replace(/\s+/g, '-').toLowerCase();
    this.post.Content = this.content; //horrible hack, should probably look at using this properly. 
    this.onSubmit.emit(this.post);
  }

}