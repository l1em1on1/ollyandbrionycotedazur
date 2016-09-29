import { OllyandbrionycotedazurPage } from './app.po';

describe('ollyandbrionycotedazur App', function() {
  let page: OllyandbrionycotedazurPage;

  beforeEach(() => {
    page = new OllyandbrionycotedazurPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
