import ".//CtaSection.css";
import CtaCard from "./CtaCard";
const CtaSection = () => {
  return (
    <div className="cta  -mt-32 pt-[25rem] pb-[12rem]">
      <div className="max-w-[87rem] px-8   mx-auto ">
        <div className="flex  flex-col lg:flex-row justify-center  gap-10 flex-wrap ">
          <CtaCard
            no={1}
            heading={"Actionable insights"}
            testimonail={
              "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
            }
          />
          <CtaCard
            no={2}
            heading={"Data-driven decisions"}
            testimonail={
              "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
            }
          />
          <CtaCard
            no={3}
            heading={"Always affordable"}
            testimonail={
              "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
