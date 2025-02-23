import { data } from "@/content";
import CocktailPage from "./client-page";

export default async function Cocktail({ params }) {
  const { category } = await params;

  const categoryData = data.find((item) => item.category === "cocktails");

  const subcategoryData = categoryData?.subcategories.find(
    (sub) => sub.slug === category
  );

  console.log(subcategoryData);

  return <CocktailPage data={subcategoryData} />;
}
