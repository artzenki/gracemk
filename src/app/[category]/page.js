import React from "react";
import CategoryLayout from "../category-layout";
import { data } from "../../content";
import Link from "next/link";
import Image from "next/image";

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const categoryData = data.find((cat) => cat.category === category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }

  return (
    <CategoryLayout title={categoryData.category} image={categoryData.image}>
      <div className="container">
        <ul className="grid grid-cols-3 md:grid-cols-3 gap-3 py-8">
          {categoryData.subcategories.map((subcategory) => (
            <Link
              href={`/${category}/${subcategory.slug}`}
              key={subcategory.name}
            >
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
    </CategoryLayout>
  );
}
