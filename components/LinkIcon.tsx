import { IconType } from 'react-icons';

interface LinkIconProps {
    Icon: IconType;
};

const LinkIcon = ({Icon}:LinkIconProps) => {
    return (
        <div>
            <Icon></Icon>
        </div>
    );
};

export { LinkIcon };