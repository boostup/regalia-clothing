import { useLocalStorageState } from "@boostup/react-custom-hooks-collection";

const INITIAL_STATE = {
  items: [],
  hidden: true,
};

export default () => {
  const [cartState, setCartState] = useLocalStorageState("cart", INITIAL_STATE);

  return {
    getCartItems: () => cartState.items,
    isCartHidden: () => cartState.hidden,
    getTotal: () => getTotal(cartState),
    getItemsCount: () => getItemsCount(cartState),
    toggleCartDropdown: () =>
      setCartState({
        ...cartState,
        hidden: toggleHidden(cartState),
      }),
    addItem: (newItem) =>
      setCartState({
        ...cartState,
        items: addItem(cartState, newItem),
      }),
    removeItem: (itemToRemove) =>
      setCartState({
        ...cartState,
        items: removeItem(cartState, itemToRemove),
      }),
    clearItemFromCart: (itemToRemove) =>
      setCartState({
        ...cartState,
        items: clearItemFromCart(cartState, itemToRemove),
      }),
    clearCart: () =>
      setCartState({
        ...cartState,
        items: clearCart(cartState),
      }),
  };
};

const getTotal = (state) => {
  const { items } = state;
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const getItemsCount = (state) => {
  const { items } = state;
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

const toggleHidden = (state) => {
  return !state.hidden;
};

const addItem = (state, itemToAdd) => {
  const { items } = state;
  const existingCartItem = items.find((item) => item.id === itemToAdd.id);

  if (existingCartItem) {
    return items.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...items, { ...itemToAdd, quantity: 1 }];
};

const removeItem = (state, itemToRemove) => {
  const { items } = state;
  const existingCartItem = items.find((item) => item.id === itemToRemove.id);
  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(state, itemToRemove);
  }
  return items.map((item) => {
    if (item.id === itemToRemove.id) {
      return {
        ...item,
        quantity: item.quantity - 1,
      };
    }
    return item;
  });
};

const clearItemFromCart = (state, itemToRemove) => {
  const { items } = state;
  return items.filter((item) => item.id !== itemToRemove.id);
};

const clearCart = (state) => {
  return [];
};
