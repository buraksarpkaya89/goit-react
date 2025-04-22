import "./Alert.css"
import clsx from "clsx"
import css from "./Alert1.module.css"
import { ImAccessibility,ImAirplane } from "react-icons/im";

const alertStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    color: "white",
    fontSize: "20px"
};

const getBgColor = variant => {
    switch (variant) {
        case "info":
            return "blue";
        case "success":
            return "green";
        case "error":
            return "red";
        case "warning":
            return "orange";
        default:
            throw new Error(`Unsupported variant prop value - ${variant}`);
    }
};

const Alert = ({ variant, children, error }) => {
    console.log(error);
    console.log(css);
    return (

        <p
            className={
                clsx([css.defaultCss],
                    {
                        [css.red]: error === "red",
                        [css.blue]: error === "blue",
                    })
            }
        // className={css[error]}
        // className= {
        //     clsx("defaultCss",
        //     {
        //         "bg-red" : error === "red",
        //         "bg-blue" : error === "blue", 
        //     })
        // }
        // className="alert"
        // style={{
        //     ...alertStyles,
        //     backgroundColor: getBgColor(variant),
        // }}
        >
            {children}
            <h1 className={css.alert2}>Module</h1>
            <ImAccessibility />
            <ImAirplane />

        </p>

    );
};

export default Alert;