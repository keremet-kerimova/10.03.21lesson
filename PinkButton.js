import classes from "./PinkButton.module.css";

const PinkButton = ({ children }) => {
    return (
        <button className={classes.PinkButton} >{children}</button>)
}
export default PinkButton;