import { IconType } from 'react-icons';

interface LinkIconProps {
    Icon: IconType;
};

const LinkIcon = ({Icon}:LinkIconProps) => {
    return (
        <div className='text-4xl'>
            <Icon></Icon>
        </div>
    );
};

export { LinkIcon };