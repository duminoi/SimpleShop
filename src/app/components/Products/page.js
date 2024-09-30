"use client";
// import ListItem from "./components/ListItem/page"; // Đường dẫn tương đối đến file page.js
import { getProducts } from "@/app/store/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "../ListItem/page";
export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  //   console.log("products", products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <div className="p-[3rem] w-full justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <ListItem key={item.id} {...item}></ListItem>
        ))}
      </div>
    </div>
  );
}
