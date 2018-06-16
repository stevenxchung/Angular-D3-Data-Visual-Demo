import { Component } from '@angular/core';
import { Article } from "./article/article.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article("Angular 6", "http://angular.io", 5),
      new Article("Semantic UI", "https://semantic-ui.com", 4),
      new Article("Paper.js", "http://paperjs.org/", 3),
      new Article("React.js", "https://reactjs.org/", 2),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log("Adding article title: ${title.value) and link: ${link.value}");
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = "";
    link.value = "";
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
