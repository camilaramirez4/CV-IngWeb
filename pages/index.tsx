import { LeftSidebar } from "@/components/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar";

const Index = () => {
  return (
    <div className="h-screen flex">
      <LeftSidebar/>
      <main className="debug w-full">
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <footer></footer>
      </main>
      <RightSidebar/>
    </div>
  );
};

export default Index;