export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id||cartItemToAdd.id

  );

  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItems.id || cartItemToAdd.id
      ? {...cartItem, quanity: cartItem.quantity +1}
      : cartItems
      )
  return[...cartItems, {...cartItemToAdd, quanity:1}]}
};