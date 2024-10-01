import ListItem from "../ListItem/page";
import { products } from "@/app/store/productsSlice";
export default async function Products() {
  console.log("products", await products);
  const productsData = await products;
  return (
    <div>
      <div className="p-[3rem] w-full justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {productsData.map((item) => (
          <ListItem key={item.id} {...item}></ListItem>
        ))}
      </div>
    </div>
  );
}
