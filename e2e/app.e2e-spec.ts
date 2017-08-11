import { Ng4FsPage } from './app.po';

describe('ng4-fs App', () => {
  let page: Ng4FsPage;

  beforeEach(() => {
    page = new Ng4FsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
