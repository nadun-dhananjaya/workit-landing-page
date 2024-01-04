import ".//HeroSection.css";
import BackgroundPatternOne from ".//..//..//assets//images//bg-pattern-1.svg";
import BackgroundPatternTwo from ".//..//..//assets//images//bg-pattern-2.svg";
import LogoLight from ".//..//..//assets//images//logo-light.svg";
import HeroImage from ".//..//..//assets//images//image-hero.webp";

const HeroSection = () => {
  return (
    <div className="w-full hero object-cover object-bottom h-[30rem]  sm:h-[40rem] lg:h-[46rem] relative">
      <img
        src={BackgroundPatternOne}
        className="hidden sm:block absolute -translate-x-1/2 translate-y-1/2"
        alt="ring background pattern"
      />
      <img
        src={BackgroundPatternTwo}
        alt="ring background pattern"
        className="hidden sm:block  absolute translate-x-1/2 -translate-y-1/2 right-12 top-1/2"
      />

      <img
        src={HeroImage}
        alt="mobile app"
        className=" absolute -translate-x-1/2 translate-y-1/2 w-4/5 max-w-[44rem] left-1/2 bottom-0"
      />

      <nav className="max-w-[87rem] px-4 sm:px-8  w-full mx-auto flex justify-between items-center h-20 lg:h-24">
        <img src={LogoLight} className="h-6" alt="workit logo" />
        <a
          onClick={() => {}}
          className="text-white hover:text-eucaplyptus font-manrope text-[1rem] sm:text-[1.125rem] underline underline-offset-8 decoration-eucaplyptus decoration-[3px]"
        >
          Apply for access
        </a>
      </nav>
      <div className="max-w-[87rem] px-2 sm:px-8  w-full mx-auto text-center ">
        <h1 className="font-fraunces text-[2.9rem] xs:text-[3.125rem] sm:text-[3.75rem] lg:text-[5rem] leading-[2.8rem] xs:leading-[3.125rem] sm:leading-[3.75rem] lg:leading-[5rem] mt-10 font-semibold text-white">
          Data tailored to <br />
          your needs.
        </h1>
        <button className="border-solid border-2 px-8 py-3 transition-all duration-300 bg-transparent text-eucaplyptus active:bg-transparent active:text-eucaplyptus hover:bg-eucaplyptus hover:text-dark-purple border-eucaplyptus mt-9 font-manrope  text-[1.125rem] font-semibold leading-8 -tracking-[0.18px]">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
