import { IconType } from "react-icons";

interface CardProps {
    Icon: IconType;
    title: String;
    description: String;
}

const Card = ({Icon, title, description}:CardProps) => {
    return (
        <div className="bg-white p-4 text-center h-[205px] flex flex-col items-center justify-center">
            <div className=" text-baby-blue text-8xl">
                <Icon/>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold text-xl p-2">{title}</span>
                <span className="text-secondary-text">{description}</span>
            </div>
        </div>
    );
};

export { Card };