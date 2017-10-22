import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import {Article} from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = new Array<Article>();
    this.articles.push(new Article(
      "The angular 4 course",
      "Screencast on how to use angular"
    ),new Article(
      "The angular UI Router course",
      "Tutorial on how to use angular routes"
    ), new Article(
      "The angular 4 is Cool",
      "Once you understand thing get pretty interesting..."
    ));
  }
}
