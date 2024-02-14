import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

const shuffleArray = (array: any[]) => {
  // Fisher-Yates algorithm for shuffling array
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  // Shuffle the array of products
  const shuffledItems = shuffleArray([...items]);

  // Display only the first 3 items
  const displayItems = shuffledItems.slice(0, 3);

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl text-white">{title}</h3>
      {displayItems.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {displayItems.map((item) => (
          <ProductCard key={item.id} data={item} index={0} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
