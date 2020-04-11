import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent implements OnInit {

  docRef: string;
  post: Post = null;

  constructor(private postService : PostService, private route: ActivatedRoute,  private router : Router) { }

  onSubmit($event : Post) {
    this.postService.updatePost(this.docRef, $event)
    .then(response => {
      this.router.navigate(['/posts', $event.Slug]);
    });
  }

  ngOnInit() {
    this.docRef = this.route.snapshot.paramMap.get("docref");
    this.postService.getPostByRef(this.docRef).subscribe(response => {
      this.post = response;
    });
  }

}
