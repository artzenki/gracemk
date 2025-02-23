import { data } from "../../../content";

import ShishasPage from "./client-page";

export default async function Shisha({ params }) {
  const { category } = await params;

  const categoryData = data.find((item) => item.category === "shishas");

  const subcategoryData = categoryData?.subcategories.find(
    (sub) => sub.slug === category
  );

  return <ShishasPage data={subcategoryData} />;
}
