interface StudiesProps {
    institution: String;
    date: String;
    title: String;
    description: String;
}

const Studies = ({institution, date, title, description}:StudiesProps) => {
    return (
        <div className="w-full flex gap-24 py-4">
            <div className="flex flex-col w-4/12 gap-6">
                <span className="text-lg font-medium">
                    {institution}
                </span>
                <div className="flex gap-6 items-center">
                    <span>
                        Student
                    </span>
                    <span className="bg-baby-blue rounded-sm text-xs h-5 px-2 flex items-center justify-center text-white">
                        {date}
                    </span>
                </div>
            </div>
            <div className="w-8/12 flex flex-col gap-6">
                <span className="text-lg font-medium">
                    {title}
                </span>
                <p className="text-secondary-text">
                    {description}
                </p>
            </div>
        </div>
    );
};

export { Studies };