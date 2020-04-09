import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.scss']
})
export class ViewblogComponent implements OnInit {

  post : Post = null;

  constructor(private postService : PostService, private route : ActivatedRoute) {
    let slug = this.route.snapshot.paramMap.get("slug");
    this.postService.getPostBySlug(slug).subscribe(response => {
      if(response.length != 1){
        //redirect to 404
      }
      this.post = response[0];
    });
   }

  ngOnInit() {
  }

}
