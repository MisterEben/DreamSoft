import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public blogs = [];
  public latests = [];

  constructor(private _blogService: BlogService) {}

  ngOnInit(){
    this.blogs = this._blogService.getBlog();
    
    this.latests = this._blogService.latestBox();
  }

}
