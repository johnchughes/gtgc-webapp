import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts :Post[];

  constructor(private postService : PostService) { 
    this.postService.getRecent().subscribe(data => this.posts = data);

console.log(Date.now());

  }

  ngOnInit() {
  }

}
