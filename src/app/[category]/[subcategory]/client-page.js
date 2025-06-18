import CategoryLayout from "@/app/category-layout";

export default function SubcategoryPage({ data }) {
  return (
    <CategoryLayout title={data.name} image={data.image}>
      <div className="container py-4 md:py-16">
        <div className="max-w-[900px] mx-auto">
          <ul className="grid grid-cols-1 gap-4">
            {data.products?.map((product, index) => (
              <li key={index} className="bg-black p-2 space-y-2">
                <div className="flex items-center justify-between">
                  <h5 className="font-semibold text-lg text-orange-200">
                    {product.name}
                  </h5>
                  <p className="text-white text-sm">{product.reagent}</p>
                </div>
                {product.description && (
                  <p className="text-sm">{product.description}</p>
                )}
                <div className="flex items-center justify-between">
                  <p className="text-white">1X</p>
                  <div className="border-b border-white w-full mx-4 h-4"></div>
                  <p className="whitespace-nowrap text-orange-200 font-bold uppercase">
                    {product.price}
                  </p>
                </div>
              </li>
            ))}
            {data.reagents && (
              <div className="pb-16">
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
              </div>
            )}
          </ul>
        </div>
      </div>
    </CategoryLayout>
  );
}
