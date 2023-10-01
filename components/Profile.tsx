import Image from 'next/image';

const Profile = () => {
    return (
        <div className="w-full h-[467px] flex flex-col bg-white relative mb-8">
            <div className='absolute right-0 bottom-0'>
                <Image src="/images/ProfileMain.jpg" alt="Profile photo" width={300} height={500}/>
            </div>
            <div className='font-bold flex flex-col text-5xl px-14 mt-16 mb-4'>
                <span className='mb-4'>I&apos;m Camila Ramírez</span>
                <div className='flex gap-4'>
                    <span className='text-baby-blue mb-8'>Systems Engineer</span>
                    <span>Student</span>
                </div>
            </div>
            <div className='w-7/12 px-14 flex flex-col '>
                <p className='text-secondary-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Et, volutpat feugiat placerat lobortis.
                    Natoque rutrum semper sed suspendisse nunc lectus.
                </p>
            </div>
            <div className='my-8 px-14'>
                <button className='bg-baby-blue rounded-md h-14 w-40 font-semibold hover:cursor-pointer hover:bg-medium-blue'>
                    HIRE ME!
                </button>
            </div>
        </div>
    );
};

export { Profile };