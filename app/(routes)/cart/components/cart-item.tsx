"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import Button from "@/components/ui/button";

interface CartItemProps {
    data: Product;
}

const CartItem: React.FC<CartItemProps> = ({data}) => {
    const cart = useCart();

    const onRemove = () => {
        cart.removeItem(data.id)
    }

    return (
      <li className="flex py-6 border-b">
        <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
          <Image
            fill
            src={data.images[0].url}
            alt=""
            className="object-cover object-center"
          />
        </div>
        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
            <div className="flex justify-between">
              <p className="mt-1 text-lg font-semibold text-white">{data.name}</p>
            </div>
            <div className="mt-10 flex justify-end gap-x-3">
              <a href={data?.link} target="_blank">
                <Button
                  className="bg-white text-black rounded-2xl"
                  onClick={onRemove}
                >
                  Amazon Link
                </Button>
              </a>
            </div>
          </div>
        </div>
      </li>
    );
}

export default CartItem;