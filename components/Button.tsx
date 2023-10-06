interface ButtonProps {
    text: String;
    type: 'primary' | 'secondary';
    handleClick?: () => void;
}

const Button = ({ text, type, handleClick=()=>{} }:ButtonProps) => {
    return (
        <button
            onClick={handleClick}
            className={`${
            type === 'primary' ? 'bg-baby-blue h-14 w-40 hover:bg-medium-blue' : 'text-baby-blue'} 
            font-semibold hover:cursor-pointer rounded-md`
        }>
            <span>{text}</span>
        </button>
    );
};

export { Button };