import { data } from "@/content";
import SubcategoryPage from "./client-page";

export default async function SubcategoryPageWrapper({ params }) {
  const { category, subcategory } = params;

  const categoryData = data.find((item) => item.category === category);
  const subcategoryData =
    categoryData?.subcategories.find((sub) => sub.slug === subcategory) || null;

  if (!subcategoryData) {
    return <div>Subcategory not found</div>;
  }

  return <SubcategoryPage data={subcategoryData} />;
}
