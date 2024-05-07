import Image from "next/image";
import React from "react";
import PrimaryBtn from "../ui/PrimaryBtn";
import SecondaryBtn from "../ui/SecondaryBtn";

const Navbar = () => {
  return (
    <nav className="flex justify justify-between m-4 py-3 px-7 items-center border-2 border-[#EAEAEA] rounded-full  container max-w-screen-xl mx-auto ">
      <div>
        <Image
          src="/img/logo.png"
          alt="Brunel"
          width={200}
          height={100}
          className="h-9 w-28"
        />
      </div>
      <div className="space-x-4">
        <SecondaryBtn href="/register" />
        <PrimaryBtn>Onboard Talent</PrimaryBtn>
      </div>
    </nav>
  );
};

export default Navbar;
