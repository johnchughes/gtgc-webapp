import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts : Post[];

  constructor(private postService : PostService) {
    postService.getRecent().subscribe(x => this.posts = x);
   }

  ngOnInit() {
  }

}
