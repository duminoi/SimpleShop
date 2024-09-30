"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
export default function Detail({ params }) {
  const { products } = useSelector((state) => state.products);
  const { id } = params;
  const product = products.find((item) => item.id === Number(id));
  console.log("product", product);
  console.log("image", product.category.image);
  const image = product.category.image;

  return (
    <div className="mx-[30rem] my-[5rem] flex gap-[5rem]">
      <Image width={300} height={500} src={`${product.images[0]}`}></Image>
      <div className=" flex flex-col gap-3">
        <div className="text-3xl">{product.category.name}</div>
        <div className="text-2xl">
          Tình trạng:
          <span className="text-green-700">Còn hàng</span>
        </div>
        <div className="flex space-x-2">
          <div className="text-xl"> Chọn màu:</div>
          <div
            className="w-8 h-8 bg-red-500 rounded-full cursor-pointer"
            title="Red"
          ></div>
          <div
            className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"
            title="Blue"
          ></div>
          <div
            className="w-8 h-8 bg-green-500 rounded-full cursor-pointer"
            title="Green"
          ></div>
        </div>
        <div className="flex space-x-4">
          <button className="w-10 h-10 border border-gray-300 rounded-lg text-sm text-center hover:bg-gray-200">
            S
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-lg text-sm text-center hover:bg-gray-200">
            M
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-lg text-sm text-center hover:bg-gray-200">
            L
          </button>
        </div>
        <div className="text-2xl">
          Mô tả:
          <span className="text-xl"> {product.description}</span>
        </div>
        <button className="bg-red-500 text-white h-[3rem]">Mua ngay</button>
      </div>
      {/* end info-wrapper */}
    </div>
  );
}
