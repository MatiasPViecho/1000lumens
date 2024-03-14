import { Banner } from "@/components/home/Banner";
import { FavoriteSection } from "@/components/home/FavoriteSection";
import { Intro } from "@/components/home/Intro";
import { Middle } from "@/components/home/Middle";

export default function Home() {
  return (
    <main className="lg:max-w-5xl lg:mx-auto lg:pt-16">
      <div className="lg:flex">
        <div className="lg:flex-1 lg:*:max-h-[724px] ">
          <Intro />
        </div>
        <div className="lg:flex lg:flex-col lg:flex-1 lg:*:max-h-[724px]">
          <Banner />
          <Middle />
        </div>
      </div>
      <div className="pb-20">
        <FavoriteSection />
      </div>
    </main>
  );
}
