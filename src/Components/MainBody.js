import React from "react";

function MainBody() {
  return (
    <div>
      <div className="main text-white">
        <div className=" flex flex-col min-h-[70vh] justify-center space-y-6 items-center py-10 px-6">
          <img
            src="./assets/profile.png"
            alt="profile-logo"
            className="w-[90px]"
          />
          <h1 className="text-center font-bold text-lg">
            wants to add you as an Emergency Contact
          </h1>
          <p className="text-center">
            By clicking “Allow” you will be added as an Emergency Contact for
            Quin Designs. You will receive their location details in the event
            of an emergency
          </p>
          <button className="text-black bg-[#04d9ff] w-[100px] h-[30px] rounded-full font-bold">
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
