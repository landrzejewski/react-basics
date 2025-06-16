import computerImage from "../../assets/computer-tech.svg";
import classes from "./Header.module.css";

const prefixes = ['Fundamental', 'Core', 'Main'];

function getRandomPrefix() {
    const index = Math.floor(Math.random() * (3));
    return prefixes[index];
}

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img className={classes.img} src={computerImage} alt="Computer"/>
            </div>
            <h1 className={classes['header-title']}>Computer Technology</h1>
            <p className={classes.text}>
                {getRandomPrefix()} computer concepts you will need to understand modern
                computing systems!
            </p>
        </header>
    );
}

export default Header;