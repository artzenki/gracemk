import Image from "next/image";
import { data } from "../../../content";
import SVG from "react-inlinesvg";
import color from "../../../../public/images/color.jpg";
import bg from "../../../../public/images/bg.jpg";

export default function Shisha({ params }) {
  const { category } = params;

  // Find the category
  const categoryData = data.find((item) => item.category === "shishas");

  // Find the subcategory
  const subcategoryData = categoryData?.subcategories.find(
    (sub) => sub.slug === category
  );
  return (
    <div>
      <div className="relative">
        <button className="w-12 h-12 absolute top-4 left-4">
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
      <div>
        <Image
          src={bg}
          alt={"Background image"}
          fill={true}
          className="absolute -z-10"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="max-w-[500px] mx-auto py-16">
          <ul className="grid grid-cols-1 gap-4">
            {subcategoryData?.products.map((product) => (
              <li key={product.id} className="bg-neutral-950 p-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h5>{product.name}</h5>
                  <p>{product.reagent}</p>
                </div>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
