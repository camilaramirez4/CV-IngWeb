import { Separator } from "./Separator";
import { Studies } from "./Studies";


const Education = () => {
    return (
        <div className="flex flex-col w-full mb-8 items-center">
            <span className="text-3xl font-bold">Education</span>
            <p className=" text-center m-6 w-2/5 text-secondary-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. lorem ipsum
            </p>
            <div className="flex flex-col w-full  bg-white py-6 px-10">
                <Studies 
                    institution="University of Toronto" 
                    date="Jan 1016 - Dec 2021" 
                    title="Certificate of web training" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. 
                    Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. 
                    Molestie risus enim neque eget dui."
                />
                <Separator/>
                <Studies 
                    institution="University of Toronto" 
                    date="Jan 1016 - Dec 2021" 
                    title="Certificate of web training" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. 
                    Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. 
                    Molestie risus enim neque eget dui."
                />
                <Separator/>
                <Studies 
                    institution="University of Toronto" 
                    date="Jan 1016 - Dec 2021" 
                    title="Certificate of web training" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. 
                    Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. 
                    Molestie risus enim neque eget dui."
                />
            </div>
        </div>
    );
};

export { Education };