"use client";

import CategoryLayout from "../../category-layout";

export default function DrinkPage({ data }) {
  return (
    <CategoryLayout title={data?.name}>
      <div className="max-w-[500px] mx-auto py-16">
        <ul className="grid grid-cols-1 gap-4">
          {data?.products.map((product, index) => (
            <li key={index} className="bg-black p-2 space-y-4">
              <div className="flex items-center justify-between">
                <h5 className="font-semibold text-lg tracking-widest text-orange-200">
                  {product.name}
                </h5>
                <p className="text-orange-200 text-sm">{product.reagent}</p>
              </div>
              <p className="text-sm uppercase tracking-widest">
                {product.desc}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xs tracking-widest">1X</p>
                <div className="border-b border-white w-full mx-4 h-4"></div>
                <p className="whitespace-nowrap text-orange-200 tracking-widest">
                  {product.price}
                </p>
              </div>
            </li>
          ))}
          {data?.reagents && (
            <div className="bg-black p-2 space-y-2">
              {Object.keys(data.reagents).map((key) => (
                <div key={key} className="flex items-center space-x-1">
                  <p className="text-xs text-orange-200 tracking-widest">
                    *{key}
                  </p>
                  <div>-</div>
                  <p className="text-xs tracking-widest uppercase">
                    {data.reagents[key]}
                  </p>
                </div>
              ))}
            </div>
          )}
        </ul>
      </div>
    </CategoryLayout>
  );
}
