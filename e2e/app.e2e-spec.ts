import { WeddinggPage } from './app.po';

describe('weddingg App', () => {
  let page: WeddinggPage;

  beforeEach(() => {
    page = new WeddinggPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
