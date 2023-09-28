const LeftSidebar = () => {
    return (
        <aside className="debug w-[350px] flex flex-col">
            <div className="flex flex-col  items-center py-12 gap-8">
                <div className="debug w-[150px] h-[150px]"></div>
                <div className="flex flex-col items-center gap-2">
                    <div className="font-semibold text-lg text-main-text">Camila Ramírez</div>
                    <div className="text-secondary-text">Systems Engineer</div>
                </div>
            </div>
            <div className="flex flex-col px-8 gap-2">
                <div className="personal-info">
                    <span>Age:</span>
                    <span>21</span>
                </div>
                <div className="personal-info">
                    <span>Residence:</span>
                    <span>Colombia</span>
                </div>
                <div className="personal-info">
                    <span>Freelance:</span>
                    <span>Available</span>
                </div>
                <div className="personal-info">
                    <span>Address:</span>
                    <span>Direccion</span>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </aside>
    );
};

export { LeftSidebar };