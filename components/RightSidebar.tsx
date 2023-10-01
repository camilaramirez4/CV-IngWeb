import { LinkIcon } from "./LinkIcon";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";

const RightSidebar = () => {
    return (
        <aside className="w-1/12 h-screen bg-white flex justify-center fixed top-0 right-0">
            <div className="py-16">
                <span className="font-bold text-2xl">
                    Links
                </span>
                <div className="py-4">
                    <a href="https://www.linkedin.com/in/camila-ram%C3%ADrez-a7429b248/" className="rounded-icon mb-4">
                        <LinkIcon Icon={GrLinkedinOption}/>
                    </a>
                    <a href="https://github.com/camilaramirez4" className="rounded-icon mb-4">
                        <LinkIcon Icon={GrGithub}/>
                    </a>
                </div>
            </div>
        </aside>
    );
};

export { RightSidebar };