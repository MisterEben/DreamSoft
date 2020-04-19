import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  public blogs = [];

  constructor(private _blogService: BlogService) { }

  ngOnInit() {
    this.blogs = this._blogService.blogBox();
  }

}
