import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button } from './Button';
import { useState } from 'react';
import { ButtonDialog } from './Dialogs/ButtonDialog';

interface ProjectProps {
    imagePath: string;
    title: String;
    description: String;
}

const Project = ({imagePath, title, description}: ProjectProps) => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleButtonClick = () => {
        console.log("Hice click en el boton");
        setDialogOpen(true);
    };
    return (
        <div className='h-[474px] min-w-[310px] bg-white flex flex-col'>
            <Image src={imagePath} alt="Project Photo" width={310} height={300}/>
            <div className='flex flex-col items-center gap-2 px-6 py-4'>
                <span className='font-semibold text-base'>
                    {title}
                </span>
                <p className='text-secondary-text'>
                    {description}
                </p>
            </div>
            <div className='px-6'>
                <div className='flex items-center justify-center gap-2 text-baby-blue'>
                    <Button text="Learn More" type='secondary' handleClick={handleButtonClick}/>
                    <MdKeyboardArrowRight/>
                </div>
                <ButtonDialog open={dialogOpen} setOpen={setDialogOpen}/>
            </div>
        </div>
    );
};

export { Project };