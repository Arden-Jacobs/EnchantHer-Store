"use client";

import React from "react";

import { Product } from "../types";

interface InfoProps {
  data: Product;
}

const PrevInfo: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="mt-2 text-3xl font-bold text-black">{data.name}</h1>
      {/* <hr className="my-2 border-b"/> */}
    </div>
  );
};

export default PrevInfo;
