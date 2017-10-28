import { CherceyPage } from './app.po';

describe('chercey App', () => {
  let page: CherceyPage;

  beforeEach(() => {
    page = new CherceyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
