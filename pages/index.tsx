import { LeftSidebar } from "@/components/LeftSidebar";
import { Profile } from "@/components/Profile";
import { Knowledge } from "@/components/Knowledge";
import { RightSidebar } from "@/components/RightSidebar";

const Index = () => {
  return (
    <div className="flex w-full h-full bg-light-gray gap-5">
      <LeftSidebar/>
      <main className="h-full w-8/12">
        <Profile/>
        <Knowledge/>
      </main>
      <RightSidebar/>
    </div>
  );
};

export default Index;