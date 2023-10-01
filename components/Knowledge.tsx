import { Card } from "./Card";
import { MdOutlineDeveloperMode } from "react-icons/md";

const Knowledge = () => {
    return (
        <div className="flex flex-col w-full mb-8 items-center">
            <span className="text-3xl font-bold">My Knowledge</span>
            <p className=" text-center m-6 w-2/5 text-secondary-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. lorem ipsum
            </p>
            <div className="grid grid-cols-3 gap-4 w-full">
                <Card Icon={MdOutlineDeveloperMode} title="Development" description="Backend and Frontend"/>
                <Card Icon={MdOutlineDeveloperMode} title="Development" description="Backend and Frontend"/>
                <Card Icon={MdOutlineDeveloperMode} title="Development" description="Backend and Frontend"/>
                <Card Icon={MdOutlineDeveloperMode} title="Development" description="Backend and Frontend"/>
                <Card Icon={MdOutlineDeveloperMode} title="Development" description="Backend and Frontend"/>
                <Card Icon={MdOutlineDeveloperMode} title="Development" description="Backend and Frontend"/>
            </div>
        </div>
    );
};

export { Knowledge };