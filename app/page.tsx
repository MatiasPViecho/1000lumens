import { Banner } from "@/components/home/Banner";
import { FavoriteSection } from "@/components/home/FavoriteSection";
import { Intro } from "@/components/home/Intro";
import { Middle } from "@/components/home/Middle";
import { MouseIconContainer } from "@/components/MouseIconContainer";
export default function Home() {
  return (
    <main>
      <MouseIconContainer classes="lg:max-w-5xl lg:mx-auto lg:pt-16 overflow-hidden">
        <div className="lg:flex gsap-main-container">
          <div className="lg:flex-1 lg:*:max-h-[724px]">
            <Intro />
          </div>
          <div className="lg:flex lg:flex-col lg:flex-1 lg:*:max-h-[724px]">
            <Banner />
            <Middle />
          </div>
        </div>
        <div className="pb-20 lg:fixed lg:top-0 lg:left-0 md:pointer-events-none overflow-x-scroll md:overflow-visible">
          <FavoriteSection />
        </div>
      </MouseIconContainer>
    </main>
  );
}
