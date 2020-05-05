import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { AuthService } from '../services/auth.service';
import { User } from 'src/models/user';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  user : User;
  posts : Post[];

  constructor(private postService : PostService, public auth : AuthService) {
    postService.getRecent().subscribe(x => this.posts = x);
    this.auth.user$.subscribe(user => this.user = user);
   }

}
