import React from "react";
import newseven from "../../images/newseven.png";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Image from "next/image";
export default function page() {
  return (
    <>
      <div className="px-[3rem] flex items-center space-x-0  justify-between ">
        <div className="">
          <Image width={100} height={100} src={newseven}></Image>
        </div>
        {/* end icon-wrapper */}
        <div className="flex">
          <ul className="flex gap-5 text-2xl">
            <li>Home</li>
            <li>Shop</li>
            <li>Contact</li>
            <li>Tin tức</li>
          </ul>
        </div>
        {/* end component wrapper */}
        <Avatar size={40} icon={<UserOutlined />} />
        {/* end avatar */}
      </div>
      {/* end header */}
    </>
  );
}
