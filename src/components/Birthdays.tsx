import Image from "next/image";
import React from "react";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex  items-center justify-between font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <Image
            src="https://images.pexels.com/photos/32696032/pexels-photo-32696032.jpeg"
            alt=""
            width={40}
            height={40}
            className="rounded-full object-cover h-10 w-10"
          />
          <span>Bruce Wayne</span>
        </div>
        <div className="flex items-center justify-end gap-3">
          <button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;
