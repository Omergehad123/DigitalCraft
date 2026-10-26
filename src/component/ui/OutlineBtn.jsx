import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

function OutlineBtn({ text, link = "#", onClick, className = "" }) {
    return (
        <MotionLink
            to={link}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={
                "inline-block text-center px-6 py-2 rounded-md border-2 border-(--main-color) text-(--main-color) font-semibold transition-all duration-300 hover:bg-(--main-color) hover:text-(--white-color) hover:shadow-md focus:outline-none cursor-pointer " +
                className
            }
            onClick={onClick}
        >
            {text}
        </MotionLink>
    );
}

export default OutlineBtn;