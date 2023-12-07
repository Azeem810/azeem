import dynamic from "next/dynamic";
import Skills from "../components/Skills/Skills";
const Loader = dynamic(() => import("../components/Loader/Loader"));
const HeroSection = dynamic(() =>
  import("../components/HeroSection/HeroSection")
);
const MediaIcons = dynamic(() => import("../components/MediaIcons/MediaIcons"));
const Quotes = dynamic(() => import("../components/Quotes/Quotes"), {
  ssr: false,
  loading: () => <Loader />,
});
const About = dynamic(() => import("../components/About"));
const Footer = dynamic(() => import("../components/Footer/Footer"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Quotes />
      <Footer />
      <MediaIcons />
    </>
  );
}
