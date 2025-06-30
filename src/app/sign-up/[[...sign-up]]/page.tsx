import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center outline outline-red-500">
      <SignUp />
    </div>
  );
};

export default Page;
