import { Card } from "./Card";
import { MdOutlineDeveloperMode } from "react-icons/md";

const Knowledge = () => {
    return (
        <div className="flex flex-col w-full mb-8 items-center">
            <span className="text-3xl font-bold">My Knowledge</span>
            <p className=" text-center m-6 w-2/5 text-secondary-text">
                These are the most valuable knowledge that I have acquired thanks to my studies and my experience in the work field.
            </p>
            <div className="grid grid-cols-3 gap-4 w-full justify-between">
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