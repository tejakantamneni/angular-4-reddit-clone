import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input('article') article: Article;

  constructor() { }

  ngOnInit() {
  }

}
