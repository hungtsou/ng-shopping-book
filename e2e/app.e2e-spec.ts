import { NgShoppingBookPage } from './app.po';

describe('ng-shopping-book App', () => {
  let page: NgShoppingBookPage;

  beforeEach(() => {
    page = new NgShoppingBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
