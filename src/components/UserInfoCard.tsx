import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex  items-center justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl">LLoyd Fleming</span>
          <span className="text-sm">@jonathan</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia,
          repudiandae.
        </p>
        <div className="flex gap-2 items-center">
          <Image
            src="/map.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>
            Living in <b>Denver</b>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/school.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>
            Went to <b>Edgar High School</b>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/work.png"
            alt=""
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>
            Works at <b>Apple Inc.</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src={"/link.png"} alt="" width={16} height={16} />
            <Link
              href="https://www.linkedin.com/in/robin-mon-miranda"
              className="text-blue-500 font-medium"
            >
              link.dev
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src={"/date.png"} alt="" width={16} height={16} />
            <span>Joined July 2025</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
