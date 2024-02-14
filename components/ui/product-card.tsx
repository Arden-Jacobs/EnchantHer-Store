"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface ProductCard {
  data: Product;
  index: number;
}

const ProductCard: React.FC<ProductCard> = ({ data, index }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-neutral-800 cursor-pointer rounded-xl p-3 space-y-6 transform transition-all hover:scale-110 hover:shadow-lg mt-8 mx-2"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl relative overflow-hidden bg-white">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          layout="fill"
          objectFit="contain"
          className="aspect-square object-cover rounded-md transition-opacity group-hover:opacity-80"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="ml-auto text-xl mt-auto font-semibold text-gray-300 transition-all group-hover:text-white">
            {data.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
