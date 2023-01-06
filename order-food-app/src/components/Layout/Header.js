import { Fragment } from "react";

import HeaderCardButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (proprs) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCardButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt=" A table food" />
            </div>
        </Fragment>
    );
};

export default Header;
