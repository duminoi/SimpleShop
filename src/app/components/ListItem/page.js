import Image from "next/image";
import React from "react";
import product1 from "../../images/product1.jpg";
import Link from "next/link";
// import Link from "@/app/components/ListItem/[id]";

export default function ListItem({ id, category, price, images }) {
  // console.log("id", id);
  return (
    <div className=" flex flex-col justify-center items-center">
      <Link href={`../../components/ListItem/${id}`}>
        <Image width={300} height={500} src={`${images[0]}`}></Image>
      </Link>
      <div className="text-3xl font-bold">{category.name}</div>

      <div className="text-2xl  text-red-700">Price: {price} $</div>
    </div>
  );
}
