import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { Button } from '../Button';
import { Dispatch, SetStateAction } from 'react';

interface ButtonDialogProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const ButtonDialog = ({ open, setOpen }:ButtonDialogProps) => {
    return (
        <Dialog open={open}>
            <DialogTitle>
                <span className='font-semibold'>Titulo del dialogo</span>
            </DialogTitle>
            <DialogContent>
                <div className='flex flex-col gap-6'>
                    <span>Contenido del dialogo</span>
                    <Button text="Close" type='secondary' handleClick={() => {
                        setOpen(false);
                    }}/>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export { ButtonDialog };