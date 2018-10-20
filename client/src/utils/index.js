const CART_KEY = 'CART';
const TOKEN_KEY = 'jwt';

export const calculatePrice = items => {
  return `$${
    items.reduce((acc, item) => acc + item.quantity * item.price, 0)
      .toFixed(2)
  }`
};

/* Cart */
export const setCart = (value, cartKey = CART_KEY) => {
  if(localStorage) {
    localStorage.setItem(cartKey, JSON.stringify(value));
  }
};

export const getCart = (cartKey = CART_KEY) => {
  if(localStorage && localStorage.getItem(cartKey)) {
    return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};

export const setToken = (value, tokenKey = TOKEN_KEY) => {
  if(localStorage) {
      localStorage.setItem(tokenKey, JSON.stringify(value));
  }
};

export const getToekn = (tokenKey = TOKEN_KEY) => {
    if(localStorage && localStorage.getItem(tokenKey)) {
        return JSON.parse(localStorage.getItem(tokenKey));
    }
    return [];
};