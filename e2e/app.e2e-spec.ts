import { AngularTohBootstrapPage } from './app.po';

describe('angular-toh-bootstrap App', function() {
  let page: AngularTohBootstrapPage;

  beforeEach(() => {
    page = new AngularTohBootstrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
