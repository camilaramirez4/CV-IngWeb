import { PiIntersectSquareBold } from 'react-icons/pi';

interface ExtraSkillProps {
    label: String;
};

const ExtraSkill = ({label}:ExtraSkillProps) => {
    return (
        <div className='flex items-center gap-1'>
            <div className='text-lg text-baby-blue'>
                <PiIntersectSquareBold/>
            </div>
            <span>{label}</span>
        </div>
    );
};

export { ExtraSkill };