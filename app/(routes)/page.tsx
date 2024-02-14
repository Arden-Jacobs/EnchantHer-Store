import landing from "@/public/Landing.jpg";
import Image from "next/image";

export const revalidate = 0;

const HomePage = async () => {
  return (
    <div className="relative w-full h-full flex">
      {/* Background Image */}
      <Image
        src={landing}
        alt="background-image"
        className="w-full object-cover h-full"
        fill
      />

      {/* Slogan container */}
      <div className="absolute top-2/4 transform -translate-y-2/4 text-white p-8">
        <h1 className="text-7xl font-bold">GAUGE YOUR</h1>
        <h1 className="text-7xl font-bold">LEVEL OF</h1>
        <h1 className="text-7xl font-bold">STIMULATION</h1>
        <p className="text-4xl">YOUR GO-TO SOURCE FOR</p>
        <p className="text-4xl">POPULAR AND TOP-RATED</p>
        <p className="text-4xl">SEX TOYS</p>
      </div>
    </div>
  );
};

export default HomePage;
