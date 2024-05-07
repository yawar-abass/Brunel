"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import { useRouter } from "next/navigation";

const ThankYouCmp = () => {
  const [time, setTime] = useState(5);
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [router]);

  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="  m-4 py-3  container max-w-screen-2xl mx-auto lg:px-20 ">
      {/* Header  */}
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
      {/* Main content */}
      <div className="flex flex-col lg:px-72 py-20 justify-center items-center mx-auto w-full h-full">
        <Image
          src="/img/Tick-round.png"
          alt="Brunel"
          width={200}
          height={200}
          quality={100}
          className="h-20 w-20 mb-10 "
        />
        <Heading title="Success Submitted" />
        <h1 className="text-3xl md:text-[56px] font-semibold mb-7 ">
          Congratulations
        </h1>
        <p className="text-2xl text-[#727272] text-center xl:px-24 ">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>
      {/* Footer */}
      <div className="md:mt-20">
        <p className="text-center text-[#727272]">
          Redirecting you to Homepage in{" "}
          <span className="font-bold text-black"> {time} Seconds</span>
        </p>
      </div>
    </div>
  );
};

export default ThankYouCmp;
