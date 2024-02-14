"use client";

import { Product } from "@/types";
import Button from "@/components/ui/button";
import AuthForm from "./auth-form";


interface InfoProps {
  data: Product;
}

const ids = [
  "2f690c24-ec0f-4a6e-81f2-f687b2d683a8",
  "62f3e1ba-0256-4b23-80c5-ba190479ab56",
  "87bf31df-e917-4d29-a8fe-1915f83fe152",
  "bd064329-3b1c-43c3-bdde-bdcce909986a",
];

const Info: React.FC<InfoProps> = ({ data }) => {
  const renderAdditionalButton = () => {
    if (ids.includes(data.id)) {
      return (
        <div className="mt-4">
          <Button className="text-black bg-white rounded-2xl">
            <AuthForm/>
          </Button>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">{data.name}</h1>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="items-center gap-x-4">
          <div className="font-semibold text-white text-xl">{data?.desc}</div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-x-5">
        <div>
          <a href={data?.link} target="_blank">
            <Button className="text-black bg-white rounded-2xl">
              Amazon Link
            </Button>
          </a>
        </div>
        <div className="-mt-4 rounded-2xl">{renderAdditionalButton()}</div>
      </div>
    </div>
  );
};

export default Info;
