"use client";

import Image from "next/image";
import SVG from "react-inlinesvg";
import color from "../../public/images/color.jpg";
import bg from "../../public/images/bg.jpg";

export default function CategoryLayout({ children, title }) {
  return (
    <div>
      {/* Header Section */}
      <div className="relative">
        <button
          onClick={() => window.history.back()}
          className="w-12 h-12 absolute top-4 left-4">
          <SVG src="/svg/arrow.svg" />
        </button>
        <Image
          src={color}
          alt={"Background image"}
          width={1920}
          height={200}
          className="w-full h-[200px] -z-10"
        />
        <h3 className="absolute left-4 bottom-4 text-xl text-white font-semibold">
          {title}
        </h3>
      </div>

      {/* Content Section */}
      <div className="relative h-full">
        <Image
          src={bg}
          alt={"Background image"}
          fill={true}
          className="absolute -z-10"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="max-w-[500px] mx-auto py-16">{children}</div>
      </div>
    </div>
  );
}
