import React from "react";
// import { footerbg } from "./assets/Footer_bg.png";
function Footer() {
  //   const footerImg = "./assets/Footer_bg.png";

  const redirecToPlaystore = () => {
    window.location.href =
      "https://apps.apple.com/us/app/quin-ride/id1414875414";
  };
  return (
    <div className="relative ">
      <div className=" z-0 bg w-[100%] h-auto ">
        <img
          src="./assets/Footer_bg.png"
          alt="footer_bg"
          className="w-[100%]"
        />
      </div>

      <div className="absolute bottom-[5%] right-5 md:bottom-[6%] md:right-12 lg:bottom-[7%] lg:right-13 xl:right-16 xl:w-[300px] lg:w-[260px] md:w-[220px] w-[140px]">
        <p className="text-white md:font-bold md:text-base md:pb-2 mobile_font pb-1 ">
          Available on
        </p>
        <div className="flex justify-between items-center ">
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=design.quintessential.helmet&hl=en&gl=US",
                "_blank"
              )
            }
          >
            <img
              src="https://qrco.de/img/generator/app/google-en.png"
              alt="google-play"
              className="xl:w-[140px] lg:w-[120px] md:w-[100px] w-[60px]"
            />
          </button>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/quin-ride/id1414875414",
                "_blank"
              )
            }
          >
            <img
              src="https://qrco.de/img/generator/app/apple-en.png"
              alt="apple-store"
              className="xl:w-[140px] lg:w-[120px] md:w-[100px] w-[60px]"
              // className="w-[60px] md:w-[90px] lg:w-[110px] xl:w-[110px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// absolute z-2 bottom-0 right-4 w-[100%]
// w-[120px] md:w-[200px] lg:w-[250px] xl:w-[300px]
