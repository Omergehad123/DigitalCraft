import { Link } from "react-router-dom";

function Button({ text = "Get Started", link = "#" }) {
    return (
        <Link to={link} className="
        inline-block 
        px-10 py-2 
        bg-(--main-color) 
        rounded-md 
        text-(--white-color)  
        uppercase
        text-xl
        transition-colors 
        duration-200 
        hover:bg-(--second-color)
        text-center
        cursor-pointer
      "
        >
            {text}
        </Link>
    );
}

export default Button