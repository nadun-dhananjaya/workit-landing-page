import AuthorImage from ".//..//..//assets//images//image-founder.webp";
import BackgroundPatternThree from ".//..//..//assets//images//bg-pattern-3.svg";
const AuthorSection = () => {
  return (
    <div className="mt-32 sm:mt-[20rem]">
      <div className="max-w-[87rem]  sm:px-8  w-full mx-auto text-center ">
        <div className="flex justify-center">
          <div className="flex items-center flex-col sm:flex-row">
            <div className="">
              <img
                src={AuthorImage}
                className="max-w-[28rem] -mb-[5.5rem] w-full sm:-mt-[24rem] lg:-mt-[27rem] mr-auto"
              />
            </div>
            <div className="  max-w-[45rem] relative w-full bg-dark-purple  sm:-ml-20 p-7 sm:p-14 lg:p-16 text-start flex flex-col items-center sm:items-start gap-8">
              <h2 className=" text-[2rem] text-white font-fraunces leading-[4rem] sm:text-[3rem] lg:text-[3.5rem]">
                Be the first to test
              </h2>
              <p className="text-white text-[1rem] lg:text-[1.125rem] lg:leading-[2rem] leading-[1.75rem] text-center sm:text-start font-manrope ">
                Hi, I'm Louis Graham, the founder of the company. Book a demo
                call with me to become a beta tester for our app and kickstart
                your company. Apply for access below and I’ll be in touch to
                schedule a call.
              </p>
              <button className="border-solid border-2 px-8 py-3 transition-all duration-300 bg-eucaplyptus hover:bg-transparent text-dark-purple border-eucaplyptus active:text-dark-purple active:bg-eucaplyptus  font-manrope cursor-pointer hover:text-eucaplyptus text-[1.125rem] font-semibold leading-8 -tracking-[0.18px]">
                Apply for access
              </button>
              <img
                src={BackgroundPatternThree}
                className="absolute hidden sm:block translate-x-0 translate-y-1/2 bottom-10 right-0 lg:right-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;
