export class Article {
  constructor( public title: string, public link: string, public votes?: number ) {
    this.votes = votes || 0;
  }

  voteup(): boolean {
    this.votes += 1;
    return false;
  }

  voteDown(): boolean {
    if ( this.votes > 0) { this.votes -= 1; }
    return false;
  }

  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
