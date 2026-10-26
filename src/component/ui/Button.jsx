import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

function Button({ text = "Get Started", link = "#", className = "" }) {
    return (
        <MotionLink
            to={link}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`
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
                shadow-sm
                hover:shadow-md
                ${className}
            `}
        >
            {text}
        </MotionLink>
    );
}

export default Button;