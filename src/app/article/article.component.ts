import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { Article } from '../shared/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row ui vertical segment';
  @Input() article: Article;

  constructor() {
  }

  voteUp(): boolean {
    this.article.voteup();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
