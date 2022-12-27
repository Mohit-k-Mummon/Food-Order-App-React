// Here we create our context and then export it to CartProvider.js

import React from 'react';

// Creating our Context
const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	// These two functions just help with autocomplete in the ide
	addItem: item => {},
	removeItem: id => {},
});

export default CartContext;
