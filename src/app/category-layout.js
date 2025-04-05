"use client";

import Image from "next/image";
import SVG from "react-inlinesvg";
import bg from "../../public/images/bg.jpg";
import formatCategory from "@/app/helpers";

export default function CategoryLayout({ children, title, image }) {
  return (
    <div className="min-h-screen relative">
      {/* Header Section */}
      <div className="relative">
        <button
          onClick={() => window.history.back()}
          className="w-12 h-12 absolute top-4 left-4"
        >
          <SVG src="/svg/arrow.svg" />
        </button>
        <Image
          src={image}
          alt={"Background image"}
          width={1920}
          height={220}
          className="w-full h-[220px] object-cover -z-10"
        />
        <h3 className="absolute left-4 bottom-4 text-xl filter text-white font-semibold">
          {formatCategory(title)}
        </h3>
      </div>
      {/* Content Section */}
      <div className="relative min-h-screen">
        <Image
          src={bg}
          alt={"Background image"}
          fill={true}
          className="absolute inset-0 -z-10 w-full h-full object-cover"
        />
        <div className="max-w-[600px] mx-auto py-8">{children}</div>
      </div>
    </div>
  );
}
