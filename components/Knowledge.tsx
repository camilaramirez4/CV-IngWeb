import { Card } from "./Card";

const Knowledge = () => {
    return (
        <div className="flex flex-col w-full mb-8 items-center">
            <span className="text-3xl font-bold">My Knowledge</span>
            <p className=" text-center m-6 w-2/5 text-secondary-text">
                These are the most valuable knowledge that I have acquired thanks to my studies and my experience in the work field.
            </p>
            <div className="grid grid-cols-3 gap-4 w-full justify-between">
                <Card imagePath="/images/WebDevelopment.png" title="Web development" description="Web application development using HTML, CSS, TypeScript."/>
                <Card imagePath="/images/MobileDevelopment.png" title="Mobile development " description="Mobile application development using Kotlin, Flutter."/>
                <Card imagePath="/images/Database.png" title="Databases management" description="Use of database managers such as Oracle, MySQL, PostgreSQL."/>
                <Card imagePath="/images/Github.png" title="Git and GitHub" description="Collaboration on projects, organization and version control."/>
                <Card imagePath="/images/Github.png" title="DevOps" description="Automation for continuous high-quality delivery."/>
                <Card imagePath="/images/Agile.png" title="Agile methodologies" description="Application of techniques in order to have a more efficient project."/>
            </div>
        </div>
    );
};

export { Knowledge };