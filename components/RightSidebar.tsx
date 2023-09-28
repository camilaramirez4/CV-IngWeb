import { LinkIcon } from "./LinkIcon";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";

const RightSidebar = () => {
    return (
        <aside className="debug w-[120px] flex justify-center">
            <div className="py-16">
                <span className="font-bold text-xl">
                    Links
                </span>
                <div className="py-4">
                    <div className="rounded-icon mb-4">
                        <LinkIcon Icon={GrLinkedinOption}/>
                    </div>
                    <div className="rounded-icon">
                        <LinkIcon Icon={GrGithub}/>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export { RightSidebar };