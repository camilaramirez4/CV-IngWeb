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
                    description="During my primary and secondary education I developed hard skills in fields such as mathematics, 
                    science and literature, as well as soft skills such as responsibility, commitment and dedication."
                />
                <Separator/>
                <Studies 
                    institution="CAMIL" 
                    date="Jan 2017 - Jun 2018" 
                    title="English level B2" 
                    description="This intensive learning experience greatly enhanced my language skills, allowing 
                    me to communicate effectively in English and expanding my horizons by gaining proficiency in a second language."
                />
                <Separator/>
                <Studies 
                    institution="University of Antioquia" 
                    date="Feb 2019 - Ongoing" 
                    title="Systems Engineer" 
                    description="This program has provided me with a solid foundation in problem-solving, critical thinking, 
                    and project management within the field of information technology. I am excited to continue expanding my knowledge 
                    and skills in this dynamic and ever-evolving field."
                />
            </div>
        </div>
    );
};

export { Education };