import { LeftSidebar } from "@/components/LeftSidebar";
import { Profile } from "@/components/Profile";
import { Knowledge } from "@/components/Knowledge";
import { RightSidebar } from "@/components/RightSidebar";
import { Education } from "@/components/Education";
import { Portfolio } from "@/components/Portfolio";

const Index = () => {
  return (
    <div className="flex w-full h-full bg-light-gray gap-5">
      <LeftSidebar/>
      <main className="h-full w-8/12 ml-[410px] mr-[160px] text-sm">
        <Profile/>
        <Knowledge/>
        <Education/>
        <Portfolio/>
        <footer className="w-full bg-white h-14 flex items-center justify-center">
          <span>
            2023 All Rights Reserved
          </span>
        </footer>
      </main>
      <RightSidebar/>
    </div>
  );
};

export default Index;