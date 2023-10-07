import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Button } from '../Button';
import { Dispatch, SetStateAction } from 'react';

interface ButtonDialogProps {
    title: String;
    description: String;
    url: string;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const ButtonDialog = ({ title, description, url, open, setOpen }:ButtonDialogProps) => {
    return (
        <Dialog open={open}>
            <DialogTitle>
                <span className='font-semibold'>{title}</span>
            </DialogTitle>
            <DialogContent>
                <div className='flex flex-col gap-6'>
                    <span>{description}</span>
                    <a href={url}>More details</a>
                    <Button text="Close" type='secondary' handleClick={() => {
                        setOpen(false);
                    }}/>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export { ButtonDialog };