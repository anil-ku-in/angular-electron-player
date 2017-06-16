import { ElectronMusicStartPage } from './app.po';

describe('electron-music-start App', () => {
  let page: ElectronMusicStartPage;

  beforeEach(() => {
    page = new ElectronMusicStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
