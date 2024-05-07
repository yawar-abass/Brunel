import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify justify-between m-4 py-3 items-center  rounded-full  container max-w-screen-2xl mx-auto lg:px-20 ">
      <div>
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="Brunel"
            width={200}
            height={100}
            className="h-9 w-28"
          />
        </Link>
      </div>
      <Link
        href="/"
        className="border-2 rounded-full h-14 border-[#CACACA] items-center w-14 "
      >
        <Image
          src="/img/cross.svg"
          alt="Brunel"
          width={50}
          height={50}
          className="h-14 w-14 p-3"
        />
      </Link>
    </div>
  );
};

export default Topbar;
