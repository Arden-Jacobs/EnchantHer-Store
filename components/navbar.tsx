import React from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarAction from "@/components/nav-actions";
import Logo from "@/public/Logo.png"

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-black">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center ">
          <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
            <p className="font-bold text-xl italic">
              <Image src={Logo} alt="" width={270} height={270} />
            </p>
          </Link>
          <MainNav data={categories} />
          <NavbarAction />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
