import Image from 'next/image';
import { useState } from 'react';
import { Button } from './Button';
import { ButtonDialog } from './Dialogs/ButtonDialog';

const Profile = () => {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    const handleButtonClick = () => {
        console.log("Hice click en el boton");
        setDialogOpen(true);
    };

    return (
        <div className="w-full h-[467px] flex flex-col bg-white relative mb-8">
            <div className='absolute right-0 bottom-0'>
                <Image src="/images/ProfileMain.jpg" alt="Profile photo" width={300} height={500}/>
            </div>
            <div className='font-bold flex flex-col text-5xl px-14 mt-16 mb-4'>
                <span className='mb-4'>I&apos;m Camila Ramírez</span>
                <div className='flex gap-4'>
                    <span className='text-baby-blue mb-8'>Systems Engineer</span>
                    <span>Student</span>
                </div>
            </div>
            <div className='w-7/12 px-14 flex flex-col '>
                <p className='text-secondary-text'>
                Currently, I am studying systems engineering at the University of Antioquia, 
                I am in my eighth semester and I have been working as a developer for nine months.
                </p>
            </div>
            <div className='my-8 px-14'>
                <Button text="HIRE ME!" type='primary' handleClick={handleButtonClick}/>
            </div>
            <ButtonDialog open={dialogOpen} setOpen={setDialogOpen}/>
        </div>
    );
};

export { Profile };