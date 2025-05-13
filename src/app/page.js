import Image from "next/image";
import { data } from "../content";
import Logo from "../../public/images/grace-logo.png";
import bg from "../../public/images/bg.jpg";
import Link from "next/link";
import formatCategory from "@/app/helpers";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Image
        src={bg}
        alt={"Background image"}
        fill={true}
        className="absolute -z-10 w-full object-cover"
      />
      <div className="container py-8">
        <Image
          src={Logo}
          alt={"Background image"}
          className="w-96 h-24 mx-auto"
        />
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 gap-4 py-4">
            {data.map((item) => {
              return (
                <Link
                  href={item.category}
                  className="inline-flex items-center space-x-2 border border-orange-200"
                  key={item.category}
                >
                  <Image
                    src={item.image}
                    alt={item.category}
                    width={200}
                    height={200}
                    className="size-56 object-cover"
                  />
                  <h2 className="text-left mt-2 text-lg font-extrabold text-orange-200">
                    {formatCategory(item.category)}
                  </h2>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
