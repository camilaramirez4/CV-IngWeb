import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Button } from '../Button';
import { Dispatch, SetStateAction } from 'react';

interface ProfileDialogProps {
    title: String;
    url: string;
    urlText: String;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const ProfileDialog = ({ title, url, urlText, open, setOpen }:ProfileDialogProps) => {
    return (
        <Dialog open={open} className='text-center'>
            <DialogTitle>
                <span className='font-semibold'>{title}</span>
            </DialogTitle>
            <DialogContent>
                <div className='flex flex-col gap-6 max-w-[400px]'>
                    <div className='flex flex-col items-center justify-center gap-3 bg-back-blue rounded-md border-4 border-back-blue'>
                        <div className='bg-light-blue flex flex-col w-full rounded-md'>
                            <span className='font-semibold'>Talento B - Bancolombia</span>
                            <span className='text-sm text-secondary-text'>Jan 2023 - Ongoing</span>
                        </div>
                        <span>Training and development of a real challenge that contributes significantly to the company.</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span>If you want to know more...</span>
                        <a href={url} className='bg-baby-blue rounded-full p-2 w-fit'>{urlText}</a>
                    </div>
                    <Button text="Close" type='secondary' handleClick={() => {
                        setOpen(false);
                    }}/>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export { ProfileDialog };