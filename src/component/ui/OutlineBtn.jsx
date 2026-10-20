function OutlineBtn({ text, link, onClick, className = "" }) {
    return (
        <a href={link}
            className={
                "px-6 py-2 rounded-md border-2 border-(--main-color) text-(--main-color) font-semibold transition-all duration-300 hover:bg-(--main-color) hover:text-(--white-color) hover:shadow-md focus:outline-none " +
                className
            }
            onClick={onClick}
        >
            {text}
        </a>
    );
}

export default OutlineBtn;