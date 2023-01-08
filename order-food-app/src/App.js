import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    const [cartInShown, setCartInSwown] = useState(false);

    const showCartHandler = () => {
        setCartInSwown(true);
    };

    const hideCarthandler = () => {
        setCartInSwown(false);
    };
    // cart is shown if cartInShown true
    return (
        <Fragment>
            {cartInShown && <Cart onClose={hideCarthandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}
export default App;
