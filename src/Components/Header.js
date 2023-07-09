import React from "react";

function Header() {
  return (
    <nav className=" bg-[#313131bd] flex justify-between items-center">
      <div className=" py-3 md:py-5 px-5 md:px-10">
        <img
          src="./assets/QuinLogo.png"
          alt="Quin-logo"
          className=" w-[150px] md:w-[200px]"
        />
      </div>
    </nav>
  );
}

export default Header;
