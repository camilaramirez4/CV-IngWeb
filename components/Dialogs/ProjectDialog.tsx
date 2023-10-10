import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Button } from '../Button';
import { Dispatch, SetStateAction } from 'react';

interface ProjectDialogProps {
    title: String;
    description: String;
    url: string;
    urlText: String;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const ProjectDialog = ({ title, description, url, urlText, open, setOpen }:ProjectDialogProps) => {
    return (
        <Dialog open={open} className='text-center'>
            <DialogTitle>
                <span className='font-semibold bg-light-blue rounded-full p-2'>{title}</span>
            </DialogTitle>
            <DialogContent>
                <div className='flex flex-col gap-6'>
                    <span className='max-w-[400px]'>{description}</span>
                    <a href={url} className='underline'>{urlText}</a>
                    <Button text="Close" type='secondary' handleClick={() => {
                        setOpen(false);
                    }}/>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export { ProjectDialog };