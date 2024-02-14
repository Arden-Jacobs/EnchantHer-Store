"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";

import { useEffect, useState } from "react";
import CartItem from "./components/cart-item";
import bg from "@/public/back.png";
import Image from "next/image";


const CartPage = () => {
  const cart = useCart();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen w-full ">
      <Image
        src={bg} // Replace with your actual image path
        alt="Background 1"
        fill
        style={{ objectFit: "cover" }}
      />
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="lg:col-span-7">
            {cart.items.length === 0 && (
              <p className="text-neutral-500">No items add to cart.</p>
            )}
            <ul>
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
