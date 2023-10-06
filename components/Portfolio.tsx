import { Project } from "./Project";

const Portfolio = () => {
    return (
        <div className="flex flex-col mb-8 items-center w-full overflow-hidden">
            <span className="text-3xl font-bold">Portfolio</span>
            <p className="text-center m-6 w-2/5 text-secondary-text">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. lorem ipsum
            </p>
            <div className="flex clex-col gap-16 overflow-x-scroll w-full">
                <Project 
                    imagePath="/images/ProfileSidebar.jpg" 
                    title="How to make web tempates" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna " 
                    buttonContent=""
                />
                <Project 
                    imagePath="/images/ProfileSidebar.jpg" 
                    title="How to make web tempates" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna " 
                    buttonContent=""
                />
                <Project 
                    imagePath="/images/ProfileSidebar.jpg" 
                    title="How to make web tempates" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna " 
                    buttonContent=""
                />
                <Project 
                    imagePath="/images/ProfileSidebar.jpg" 
                    title="How to make web tempates" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna " 
                    buttonContent=""
                />
            </div>
        </div>
    );
};

export { Portfolio };