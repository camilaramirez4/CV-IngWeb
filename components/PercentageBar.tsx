interface PercentageBarProps {
    label: String;
    percentage: number;
}

const PercentageBar = ({label, percentage}:PercentageBarProps) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <span>{label}</span>
                <span>{percentage}%</span>
            </div>
            <div className="flex items-center border border-baby-blue bg-white rounded-full w-full h-2 px-0.5 my-0.5">
                <div style={{ width: `${percentage}%` }} className="bg-baby-blue rounded-full h-1/2"></div>
            </div>
        </div>
    );
};

export { PercentageBar };