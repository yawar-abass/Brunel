import Navbar from "@/components/Layout/Navbar";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="h-[70vh] flex items-center flex-col justify-center space-y-3">
        <h2 className="text-3xl">Sorry, we could not find that page.</h2>
        <p>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          {" "}
          <PrimaryBtn>Return Home</PrimaryBtn>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
