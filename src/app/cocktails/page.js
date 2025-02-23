import React from "react";
import CategoryLayout from "../category-layout";
import { data } from "../../content";
import Link from "next/link";
import Image from "next/image";

export default function Cockatils() {
  const subcategories = data.find(
    (cat) => cat.category === "cocktails"
  ).subcategories;
  return (
    <CategoryLayout title="Cocktails" image="/images/cocktail-01.jpg">
      <ul className="grid grid-cols-3 gap-x-4 py-16">
        {subcategories.map((subcategory) => (
          <Link href={`/cocktails/${subcategory.slug}`} key={subcategory.name}>
            <li className="border-2 border-yellow-200 relative">
              <Image
                src={subcategory.image}
                alt={subcategory.name}
                width={200}
                height={200}
                className="object-cover h-32"
              />
              <h2 className="text-sm font-semibold text-white absolute bottom-2 left-2">
                {subcategory.name}
              </h2>
            </li>
          </Link>
        ))}
      </ul>
    </CategoryLayout>
  );
}
