// "use client";
import Image from "next/image";
// import { useSelector } from "react-redux";
import { products } from "@/app/store/productsSlice";
export default async function Detail({ params }) {
  const { id } = params;
  const productData = await products;
  const product = productData.find((item) => item.id === Number(id));
  console.log("product", product);
  console.log("image", product.category.image);
  const image = product.category.image;

  return (
    <div className="px-[30rem] py-[5rem] flex gap-[5rem]">
      <Image
        priority
        alt="Product image"
        width={200}
        height={300}
        src={`${image}`}
        style={{ width: "100%", height: "auto" }}
      ></Image>
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
