import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface ProjectProps {
    imagePath: string;
    title: String;
    description: String;
    buttonContent: String;
}

const Project = ({imagePath, title, description, buttonContent}: ProjectProps) => {
    return (
        <div className='h-[474px] w-[310px] bg-white flex flex-col'>
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
                <button className='text-baby-blue font-semibold flex items-center justify-center gap-2'>
                    Learn More
                    <MdKeyboardArrowRight/>
                </button>
            </div>
        </div>
    );
};

export { Project };