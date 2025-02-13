import Image from "next/image";
import { data } from "../content";
import SVG from "react-inlinesvg";
import color from "../../public/images/color.jpg";
import bg from "../../public/images/bg.jpg";

export default function Home() {
  return (
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
      <div className="container py-12">
        <SVG src="svg/logo.svg" className="w-96 h-24 mx-auto" />
        <div className="max-w-[500px] mx-auto">
          <div className="grid grid-cols-1 gap-8 py-16">
            {data.map((item) => {
              return (
                <a
                  href={item.category}
                  className="inline-flex items-center space-x-4 border border-orange-200"
                  key={item.category}>
                  <Image
                    src={color}
                    alt={item.category}
                    width={200}
                    height={200}
                  />
                  <h2 className="text-center mt-4 text-lg font-medium text-orange-200 uppercase tracking-widest">
                    {item.category}
                  </h2>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
