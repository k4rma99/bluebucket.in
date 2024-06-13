import HomeAbout2 from "./home-about-2/home-about-2";
import HomeAbout from "./home-about/home-about";
import HomeFooter from "./home-footer/home-footer";
import HeroArea from "./home-hero/hero-area";
import HomeServices from "./home-services/home-services";
import HomeWhy from "./home-why-chose-us/home-why";

export default function Home() {
  return (
    <>
      <HeroArea />

      <HomeServices />

      <HomeAbout />

      <HomeWhy />

      <HomeAbout2 />

      {/* <HomeClient /> */}

      <HomeFooter />
    </>
  );
}
