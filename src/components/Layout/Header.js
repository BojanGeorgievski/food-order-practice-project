import { Fragment } from "react";

import kebab from "../../assets/kebab.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import meals from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Bojan's Place</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;