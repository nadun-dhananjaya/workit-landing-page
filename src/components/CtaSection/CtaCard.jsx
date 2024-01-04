const CtaCard = ({ no, heading, testimonail }) => {
  return (
    <div className="w-full lg:max-w-[22.125rem] mt-5  gap-6 sm:gap-8 lg:gap-16  lg:mt-10  flex items-center flex-col sm:flex-row lg:flex-col">
      <div>
        <span
          className="h-14 w-14   font-fraunces text-dark-purple
      text-[1.25rem] lg:text-[1.5rem] font-semibold leading-10 rounded-full flex justify-center items-center border-solid border-[1px] border-dark-purple"
        >
          {no}
        </span>
      </div>
      <div>
        <h2 className="font-fraunces text-dark-purple text-center sm:text-start lg:text-center font-semibold leading-10 text-[1.75rem] lg:text-[2rem]">
          {heading}
        </h2>
        <p className="mt-4 lg:mt-7 text-davys-grey text-center sm:text-start lg:text-center font-manrope text-[1rem] lg:text-[1.125rem] font-normal leading-7 lg:leading-8">
          {testimonail}
        </p>
      </div>
    </div>
  );
};

export default CtaCard;
