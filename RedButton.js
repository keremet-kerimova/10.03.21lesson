import classes from "./RedButton.module.css";

const RedButton = ({ children }) => {
    return (
        <button className={classes.RedButton} >{children}</button>)
}
export default RedButton;