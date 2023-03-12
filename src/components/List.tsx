import axios from "axios";
import Link from "next/link";
import Item from "./Item";
import Tag from "./Tag";
import React, { useEffect, useState } from "react";
interface ListProps {
  href: string;
  link: string;
  title: string;
}

const List: React.FC<ListProps> = ({ href, link, title }) => {
  const [items, setItems] = useState([]);
  const getData = async () => {
    try {
      const data = await axios.get("http://localhost:7000/api/v1/item");
      setItems(data.data.items);
      console.log(data.data.items[0]);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-6 flex w-screen items-center justify-center overflow-y-visible px-4 ">
      <div className="flex w-full max-w-xl flex-col">
        <div className="mb-3 flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">{title}</p>
          <Link href={{ pathname: href, query: { keyword: title } }}>
            <p className="text-sm font-semibold text-gray-600">See More</p>
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto  scroll-smooth scrollbar-hide">
          {/* FIXME: TODO: add data fetch */}
          {items.map((item, index) => {
            return (
              <Item
                key={index}
                item={{
                  title: item?.title,
                  compony: item?.compony,
                  status: item?.status,
                  prise: item?.prise,
                  hot: item?.hot,
                  images: item?.images,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
