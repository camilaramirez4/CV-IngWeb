import { Separator } from "./Separator";
import { Studies } from "./Studies";


const Education = () => {
    return (
        <div className="flex flex-col w-full mb-8 items-center">
            <span className="text-3xl font-bold">Education</span>
            <p className=" text-center m-6 w-2/5 text-secondary-text">
                The studies that I have carried out up to this point have contributed 
                significantly to my training as a systems engineer.
            </p>
            <div className="flex flex-col w-full  bg-white py-6 px-10">
                <Studies 
                    institution="I.E Benedikta Zur Nieden" 
                    date="Jan 2008 - Nov 2018" 
                    title="Primary School & High School" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. 
                    Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. 
                    Molestie risus enim neque eget dui."
                />
                <Separator/>
                <Studies 
                    institution="CAMIL" 
                    date="Jan 2017 - Jun 2018" 
                    title="English level B2" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. 
                    Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. 
                    Molestie risus enim neque eget dui."
                />
                <Separator/>
                <Studies 
                    institution="University of Antioquia" 
                    date="Feb 2019 - Ongoing" 
                    title="Systems Engineer" 
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