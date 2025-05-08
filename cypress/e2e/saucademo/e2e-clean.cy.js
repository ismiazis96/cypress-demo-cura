// e2e test saucademo
import { visitSaucedemo, login, addToCart, openShoppingCart, checkout, addBuyerInfo, continueCheckout, finishCheckout } from '../../support/commands';
import { credentials } from './credentials';


describe('E2e test saucademo', () => {
  it('Test Positive E2E', () => {
    visitSaucedemo();
    login(credentials.username, credentials.password);
    addToCart('sauce-labs-bike-light');
    addToCart('sauce-labs-fleece-jacket');
    openShoppingCart();
    checkout();
    addBuyerInfo('mohamad', 'ismi azis', '123');
    continueCheckout();
    finishCheckout();
  });
});