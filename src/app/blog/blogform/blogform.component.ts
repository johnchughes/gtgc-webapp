import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})
export class BlogformComponent implements OnInit {

  post : Post = new Post("", "");

  constructor() { }

  ngOnInit() {
  }

  onTitleChanged($event: any) {
    this.post.Slug = this.post.Title.replace(/\s+/g, '-').toLowerCase();;
    console.log(this.post.Slug);
  }

}
