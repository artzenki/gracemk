"use client";

import Image from "next/image";
import { data } from "../../content";
import color from "../../../public/images/color.jpg";
import bg from "../../../public/images/bg.jpg";
import SVG from "react-inlinesvg";

export default function Shishas() {
  const subcategories = data.find(
    (cat) => cat.category === "shishas"
  ).subcategories;

  return (
    <div>
      <div className="relative">
        <button
          onClick={() => window.history.back()}
          className="w-12 h-12 absolute top-4 left-4">
          <SVG src="svg/arrow.svg" />
        </button>
        <Image
          src={color}
          alt={"Background image"}
          width={1920}
          height={200}
          className="w-full h-[200px] -z-10"
        />
        <h3 className="absolute left-4 bottom-4 text-xl text-white font-semibold">
          Shishas
        </h3>
      </div>
      <div className="relative h-full">
        <Image
          src={bg}
          alt={"Background image"}
          fill={true}
          style={{
            objectFit: "cover",
            height: "100%",
          }}
        />
        <div className="container py-16">
          <div className="max-w-[500px] mx-auto">
            <ul className="grid grid-cols-3 gap-x-4 py-16">
              {subcategories.map((subcategory) => (
                <a href={`/shishas/${subcategory.slug}`} key={subcategory.name}>
                  <li className="border-2 border-yellow-200 relative">
                    <Image
                      src={color}
                      alt={subcategory.name}
                      width={200}
                      height={200}
                    />
                    <h2 className="text-sm font-semibold text-white absolute bottom-2 left-2">
                      {subcategory.name}
                    </h2>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
