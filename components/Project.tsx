import Image from 'next/image';

interface ProjectProps {
    imagePath: string;
    title: String;
    description: String;
}

const Project = ({imagePath, title, description}: ProjectProps) => {
    
    return (
        <div className='h-[430px] min-w-[310px] bg-white flex flex-col'>
            <Image src={imagePath} alt="Project Photo" width={310} height={310}/>
            <div className='flex flex-col items-center gap-2 px-6 py-4'>
                <span className='font-semibold text-base'>
                    {title}
                </span>
                <p className='text-secondary-text'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export { Project };