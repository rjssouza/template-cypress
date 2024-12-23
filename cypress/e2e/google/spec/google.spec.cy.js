import googlePage from '../page/google.page';

describe('Acessar o google', () => {
  it('Devo acessar a pagina principal do google', () => {
    googlePage.open();
    googlePage.assertTitle('Google');
  });
});
