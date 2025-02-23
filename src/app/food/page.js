import React from "react";
import CategoryLayout from "../category-layout";
import { data } from "@/content";
import Image from "next/image";
import Link from "next/link";

export default function Food() {
  const subcategories = data.find(
    (cat) => cat.category === "food"
  ).subcategories;
  return (
    <CategoryLayout title="Food" image="/images/food-01.jpg">
      <div className="container">
        <div className="max-w-[500px] mx-auto">
          <ul className="grid md:grid-cols-3 gap-4 py-16">
            {subcategories.map((subcategory) => (
              <Link href={`/food/${subcategory.slug}`} key={subcategory.name}>
                <li className="border-2 border-yellow-200 relative">
                  <Image
                    src={subcategory.image}
                    alt={subcategory.name}
                    width={200}
                    height={200}
                    className="object-cover h-32 w-full"
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
