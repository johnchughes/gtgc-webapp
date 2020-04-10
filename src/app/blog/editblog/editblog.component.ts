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

  post: Post = null;

  constructor(private postService : PostService, private route: ActivatedRoute) { }

  onSubmit($event) {
    console.log('save edits ... ', $event);
  }

  ngOnInit() {
    let docRef = this.route.snapshot.paramMap.get("docref");
    this.postService.getPostByRef(docRef).subscribe(response => {
      this.post = response;
    });
  }

}
