import { Link } from "react-router-dom";

function OutlineBtn({ text, link, onClick, className = "" }) {
    return (
        <Link to={link}
            className={
                "px-6 py-2 rounded-md border-2 border-(--main-color) text-(--main-color) font-semibold transition-all duration-300 hover:bg-(--main-color) hover:text-(--white-color) hover:shadow-md focus:outline-none " +
                className
            }
            onClick={onClick}
        >
            {text}
        </Link>
    );
}

export default OutlineBtn;