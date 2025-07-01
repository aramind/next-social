import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/28986385/pexels-photo-28986385.jpeg"
                alt=""
                fill
                className="object-cover rounded-md"
              />
              <Image
                src="https://images.pexels.com/photos/32736041/pexels-photo-32736041.jpeg"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 object-cover rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              Robin Mon Miranda
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <div className="text-sm">Posts</div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">1.2K</span>
                <div className="text-sm">Followers</div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">2.2K</span>
                <div className="text-sm">Following</div>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="123" />
      </div>
    </div>
  );
};

export default ProfilePage;
