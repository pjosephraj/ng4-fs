import { Component } from '@angular/core';

import { Article } from './shared/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article( 'Angular 2', 'https://angular.io', 3),
      new Article( 'Ng4 Book', 'https://ng-book.com/2/', 2),
      new Article( 'Full Stack React', 'https://fullstackreact.com', 1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes );
  }
}
