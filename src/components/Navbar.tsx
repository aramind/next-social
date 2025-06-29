import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* Left */}
      <div>
        <Link href="/" className="font-bold text-xl text-blue-600">
          RMSOCIAL
        </Link>
      </div>
      {/* center */}
      <div className="hidden"></div>
      {/* right */}
      <div className="">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
