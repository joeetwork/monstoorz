import logo from "@/lib/assets/logo.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-xl py-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-xl font-bold lg:text-4xl">
          Bitcoin&apos;s favourite monstoorz <br /> Crafted with digital matter
        </h1>

        <Image
          src={logo}
          width={300}
          className="m-4 rounded"
          alt="Monstoorz Logo"
        />

        <div className="text-center">
          <p className="text-lg">Minted 0/8000</p>
          <button className="btn mt-2 hover:bg-yellow-500 hover:text-black">
            Mint
          </button>
        </div>
      </div>
    </div>
  );
}
