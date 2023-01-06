import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCardButton = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your car</span>
            <span className={classes.badge}>3</span>
        </button>
    );
};
export default HeaderCardButton;
