import getProducts from "@/actions/get-products";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colourId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colourId: searchParams.colourId,
    sizeId: searchParams.sizeId,
  });

  return (
    <div className="flex justify-center items-center mx-auto">
      <div className="px-4 py-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.length === 0 && <NoResults />}
          {products.map((item) => (
            <ProductCard data={item} key={item.id} index={0}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
