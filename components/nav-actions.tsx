"use client";

import { Gift, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => router.push("/giveaway")}
        className="flex items-center bg-black border-2 border-red-700 rounded-xl px-4 py-2"
      >
        <Gift size={20} color="#F44336" />
      </Button>
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center bg-black border-2 border-red-700 rounded-xl px-4 py-2"
      >
        <ShoppingBag size={20} color="#F44336" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
