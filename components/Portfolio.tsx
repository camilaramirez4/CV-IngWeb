import { Project } from "./Project";
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button } from './Button';
import { ButtonDialog } from './Dialogs/ButtonDialog';

const Portfolio = () => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleButtonClick = () => {
        setDialogOpen(true);
    };

    return (
        <div className="flex flex-col mb-8 items-center w-full overflow-hidden">
            <span className="text-3xl font-bold">Portfolio</span>
            <p className="text-center m-6 w-2/5 text-secondary-text">
            Some of the projects that I have had the opportunity to carry out throughout 
            my university career with the knowledge I have acquired.
            </p>
            <div className="flex clex-col gap-16 overflow-x-scroll w-full">
                <div className="flex flex-col">
                    <Project 
                        imagePath="/images/Femakeup.jpg" 
                        title="Femakeup Webpage" 
                        description="This website was designed for a small makeup sales business." 
                    />
                    <div className='h-[44px] min-w-[310px] bg-white px-6 flex items-start'>
                        <div className='flex items-center justify-center gap-2 text-baby-blue'>
                            <Button text="Learn More" type='secondary' handleClick={handleButtonClick}/>
                            <MdKeyboardArrowRight/>
                        </div>
                        <ButtonDialog title="Holi" description="Holi" url="https://google.com"  open={dialogOpen} setOpen={setDialogOpen}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Project 
                        imagePath="/images/Amarte.jpg" 
                        title="Amarte Webpage" 
                        description="This website was designed for Amarte, which is a business in which products made with epoxy resin are sold." 
                    />
                    <div className='h-[44px] min-w-[310px] bg-white px-6 flex items-start'>
                        <div className='flex items-center justify-center gap-2 text-baby-blue'>
                            <Button text="Learn More" type='secondary' handleClick={handleButtonClick}/>
                            <MdKeyboardArrowRight/>
                        </div>
                        <ButtonDialog title="A" description="E" url="" open={dialogOpen} setOpen={setDialogOpen}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Project 
                        imagePath="/images/Udea.jpg" 
                        title="Game for institutional accreditation" 
                        description="This video game was made for the University of Antioquia by a group of three students." 
                    />
                    <div className='h-[44px] min-w-[310px] bg-white px-6 flex items-start'>
                        <div className='flex items-center justify-center gap-2 text-baby-blue'>
                            <Button text="Learn More" type='secondary' handleClick={handleButtonClick}/>
                            <MdKeyboardArrowRight/>
                        </div>
                        <ButtonDialog title="" description="" url="" open={dialogOpen} setOpen={setDialogOpen}/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Project 
                        imagePath="/images/CV.png" 
                        title="CV" 
                        description="This life story was developed in the subject called web engineering."
                    />
                    <div className='h-[44px] min-w-[310px] bg-white px-6 flex items-start'>
                        <div className='flex items-center justify-center gap-2 text-baby-blue'>
                            <Button text="Learn More" type='secondary' handleClick={handleButtonClick}/>
                            <MdKeyboardArrowRight/>
                        </div>
                        <ButtonDialog title="" description="" url="" open={dialogOpen} setOpen={setDialogOpen}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Portfolio };