import React from "react";

const CartContect = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default CartContect;
