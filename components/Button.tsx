interface ButtonProps {
    text: String;
    handleClick?: () => void;
}

const Button = ({ text, handleClick=()=>{} }:ButtonProps) => {
    return (
        <button className="bg-baby-blue rounded-md h-14 w-40 font-semibold hover:cursor-pointer hover:bg-medium-blue"
        onClick={handleClick}>
            <span>{text}</span>
        </button>
    );
};

export { Button };