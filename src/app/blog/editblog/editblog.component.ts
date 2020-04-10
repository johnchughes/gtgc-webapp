import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.scss']
})
export class EditblogComponent implements OnInit {

  docRef: string;
  post: Post = null;

  constructor(private postService : PostService, private route: ActivatedRoute) { }

  onSubmit($event) {
    this.postService.updatePost(this.docRef, $event);
  }

  ngOnInit() {
    this.docRef = this.route.snapshot.paramMap.get("docref");
    this.postService.getPostByRef(this.docRef).subscribe(response => {
      this.post = response;
    });
  }

}
