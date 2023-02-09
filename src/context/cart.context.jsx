import { createContext, useState, useEffect } from "react";
// return new array for the state to to update and make changes
const addCartItem = (cartItems, productToAdd) => {
  const filterItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });
  if (!filterItem) {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  } else {
    filterItem.quantity++;
    return [...cartItems];
  }
};
const incrementItem = (cartItems, productId) => {
  const product = cartItems.find((item) => {
    return item.id === productId;
  });
  product.quantity++
  return [...cartItems]
};
const decrementItem = (cartItems, productId) => {
  const product = cartItems.find((item) => {
    return item.id === productId;
  });
  if(product.quantity <= 1){
    product.quantity = 1
  }else{
    product.quantity--
  }
  return [...cartItems]
};

const removeItem = (cartItems, productId) => {
  const newArr = cartItems.filter((cartItem)=>cartItem.id !== productId)

  return [...newArr]
};


export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  increment: () => {},
  decrement: () => {},
  remove: () => {},
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.length;
    setCartCount(count);

    const total = cartItems.reduce((prev,next)=>{
      return prev + (next.quantity * next.price)
    },0)

    setCartTotal(total)
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const increment = (productId) => {
    setCartItems(incrementItem(cartItems,productId))
  };
  const decrement = (productId) => {
    setCartItems(decrementItem(cartItems,productId))
  };
  const remove = (productId) => {
    setCartItems(removeItem(cartItems,productId))
  };
  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    cartCount,
    increment,
    decrement,
    remove,
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
