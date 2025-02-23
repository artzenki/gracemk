"use client";

import Image from "next/image";
import { data } from "../../content";
import CategoryLayout from "@/app/category-layout";
import Link from "next/link";

export default function Shishas() {
  const subcategories = data.find(
    (cat) => cat.category === "shishas"
  ).subcategories;

  return (
    <CategoryLayout title="Shishas">
      <div className="container">
        <div className="max-w-[500px] mx-auto">
          <ul className="grid grid-cols-3 gap-x-4 py-16">
            {subcategories.map((subcategory) => (
              <Link
                href={`/shishas/${subcategory.slug}`}
                key={subcategory.name}>
                <li className="border-2 border-yellow-200 relative">
                  <Image
                    src={"/images/color.jpg"}
                    alt={subcategory.name}
                    width={200}
                    height={200}
                  />
                  <h2 className="text-sm font-semibold text-white absolute bottom-2 left-2">
                    {subcategory.name}
                  </h2>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </CategoryLayout>
  );
}
