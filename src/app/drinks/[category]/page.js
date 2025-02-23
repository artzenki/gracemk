import { data } from "../../../content";
import FoodPage from "./client-page";

export default async function Drink({ params }) {
  const { category } = await params;

  const categoryData = data.find((item) => item.category === "drinks");

  const subcategoryData = categoryData?.subcategories.find(
    (sub) => sub.slug === category
  );

  return <FoodPage data={subcategoryData} />;
}
