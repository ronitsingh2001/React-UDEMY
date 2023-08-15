import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const [animation, setAnimation] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAnimation(true);
    const timer = setTimeout(() => {
      setAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${animation ? classes.bump : ""}`;

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart!</span>
      <span className={classes.badge}>
        {ctx.items.reduce((curNum, item) => curNum + item.amount, 0)}
      </span>
    </button>
  );
};

export default HeaderCartButton;
