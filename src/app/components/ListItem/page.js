import Image from "next/image";
import React from "react";
import product1 from "../../images/product1.jpg";
import Link from "next/link";
// import Link from "../../components/ListItem/Detail";

export default function page({ name, price }) {
  return (
    <div className=" flex flex-col justify-center items-center">
      <Link href="../../components/ListItem/Detail">
        <Image width={300} height={500} src={product1}></Image>
      </Link>
      <div className="text-3xl font-bold">{name}</div>

      <div className="text-2xl  text-red-700">Price: {price} $</div>
    </div>
  );
}
