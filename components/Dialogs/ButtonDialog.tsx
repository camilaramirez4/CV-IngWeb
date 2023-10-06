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
                <span>Titulo del dialogo</span>
            </DialogTitle>
            <DialogContent>
                <div>
                    <span>Contenido del dialogo</span>
                    <Button text="Close" handleClick={() => {
                        setOpen(false);
                    }}/>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export { ButtonDialog };