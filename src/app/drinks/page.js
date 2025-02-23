import CategoryLayout from "@/app/category-layout";
import Image from "next/image";
import { data } from "@/content";
import Link from "next/link";

export default function Drinks() {
  const subcategories = data.find(
    (cat) => cat.category === "drinks"
  ).subcategories;

  return (
    <CategoryLayout title="Drinks" image="/images/drink-01.png">
      <div className="container">
        <div className="max-w-[500px] mx-auto">
          <ul className="grid md:grid-cols-3 gap-4 py-16">
            {subcategories.map((subcategory) => (
              <Link href={`/drinks/${subcategory.slug}`} key={subcategory.name}>
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
