import LogoDark from ".//..//..//assets//images//logo-dark.svg";
import IconFacebook from ".//..//..//assets//images//icon-facebook.svg";
import IconInstagram from ".//..//..//assets//images//icon-instagram.svg";
import IconX from ".//..//..//assets//images//icon-twitter.svg";

const FooterSection = () => {
  return (
    <div className="mt-[5rem] sm:mt-[7.5rem] pb-10">
      <img src={LogoDark} className="mx-auto " alt="workit logo" />
      <div className="flex justify-center gap-10  mt-10">
        <img src={IconFacebook} className="" />
        <img src={IconInstagram} className="" />
        <img src={IconX} className="" />
      </div>
    </div>
  );
};

export default FooterSection;
