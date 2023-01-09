import CartContect from "./cart-context";

const CartProvider = (props) => {
    const additemToCartHandler = (item) => {};

    const removeToCartHandelr = (id) => {};

    const cartContext = {
        items: [],

        totalAmount: 0,
        addItem: additemToCartHandler,
        removeItem: removeToCartHandelr,
    };

    return (
        <CartContect.Provider value={cartContext}>
            {props.children}
        </CartContect.Provider>
    );
};
export default CartProvider;
