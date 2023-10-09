import Image from 'next/image';
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button } from './Button';
import { ProjectDialog } from './Dialogs/ProjectDialog';

interface ProjectProps {
    imagePath: string;
    title: String;
    description: String;
    dialogDescription: String;
    dialogLink: string;
}

const Project = ({imagePath, title, description, dialogDescription, dialogLink}: ProjectProps) => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleButtonClick = () => {
        setDialogOpen(true);
    };

    return (
        <div>
            <div className='h-[420px] min-w-[310px] bg-white flex flex-col'>
                <Image src={imagePath} alt="Project Photo" width={310} height={310}/>
                <div className='flex flex-col items-center gap-2 px-6 py-4'>
                    <span className='font-semibold text-base'>
                        {title}
                    </span>
                    <p className='text-secondary-text'>
                        {description}
                    </p>
                </div>
            </div>
            <div className='min-w-[310px] bg-white px-6 py-4 flex items-start'>
                <div className='flex items-center justify-center gap-2 text-baby-blue'>
                    <Button text="Learn More" type='secondary' handleClick={handleButtonClick}/>
                    <MdKeyboardArrowRight/>
                </div>
                <ProjectDialog title={title} description={dialogDescription} url={dialogLink} urlText="I want to know more!" open={dialogOpen} setOpen={setDialogOpen}/>
            </div>
        </div>
    );
};

export { Project };