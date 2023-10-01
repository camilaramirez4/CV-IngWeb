import Image from 'next/image';
import { Separator } from './Separator';
import { PercentageBar } from './PercentageBar';
import { ExtraSkill } from './ExtraSkill';

const LeftSidebar = () => {
    return (
        <aside className="h-screen w-3/12 bg-white flex flex-col items-center text-sm fixed top-0 left-0 px-14">
            <div className="flex flex-col items-center mt-7 mb-3 gap-2">
                <div className="flex flex-col relative">
                    <Image src="/images/ProfileSidebar.jpg" alt="Profile photo" width={140} height={140} 
                    className='rounded-full border-2 border-medium-gray'/>
                    <span className='absolute rounded-full w-[16px] h-[16px] bg-available-green right-2 bottom-4'></span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-semibold text-base text-main-text">Camila Ramírez</div>
                    <div className="text-secondary-text">Systems Engineer Student</div>
                </div>
            </div>
            <Separator/>
            <div className="left-sidebar-info">
                <div className="personal-info">
                    <span>Age:</span>
                    <span>21</span>
                </div>
                <div className="personal-info">
                    <span>Residence:</span>
                    <span>Colombia</span>
                </div>
                <div className="personal-info">
                    <span>Phone Number:</span>
                    <span>+57 3008990195</span>
                </div>
                <div className="personal-info">
                    <span>Email:</span>
                    <span>camila.ramirez4@udea.edu.co</span>
                </div>
            </div>
            <Separator/>
            <div className='left-sidebar-info'>
                <span className='font-semibold text-base'>Languages</span>
                <PercentageBar label="Spanish" percentage={100}/>
                <PercentageBar label="English" percentage={85}/>
                <PercentageBar label="French" percentage={20}/>
            </div>
            <Separator/>
            <div className='left-sidebar-info'>
                <span className='font-semibold text-base'>Programming Languages</span>
                <PercentageBar label="Java" percentage={75}/>
                <PercentageBar label="Python" percentage={50}/>
                <PercentageBar label="TypeScript" percentage={65}/>
            </div>
            <Separator/>
            <div className='left-sidebar-info'>
                <span className='font-semibold text-base'>Extra Skills</span>
                <ExtraSkill label="GIT Knowledge"/>
                <ExtraSkill label="Time management"/>
                <ExtraSkill label="Teamwork"/>
            </div>
            <Separator/>
        </aside>
    );
};

export { LeftSidebar };