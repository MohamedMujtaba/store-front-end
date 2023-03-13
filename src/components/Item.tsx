import { CldImage } from "next-cloudinary";
import Image from "next/image";
import React from "react";
import Tag from "./Tag";
interface ItemProps {
  item: {
    title: string;
    compony: string;
    status: string;
    prise: number;
    hot: boolean;
    images: {
      public_id: string;
      url: string;
    }[];
  };
}
let formatter = Intl.NumberFormat("en", { notation: "compact" });
const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="relative mx-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md ">
      <div className="relative flex h-52 shrink-0 items-center justify-center overflow-hidden  bg-gray-200">
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
          Sale
        </span>
        {item?.images[0].public_id && (
          <CldImage
            width={310}
            height={163}
            // crop="fill"
            className="h-full object-contain"
            src={item?.images[0].public_id}
            alt="Description of my image"
          />
        )}
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-slate-900">
          {item?.title}
        </h5>
        {/* <p className="text-lg font-semibold xl:text-base"></p> */}
        {/* <div className="">
          <Tag variant="Info">{item?.compony}</Tag>
          <Tag variant="Info">{item?.status}</Tag>
          <Tag variant="Success">Hot</Tag>
        </div> */}
        <p>
          <span className="text-3xl font-bold text-slate-900">
            {formatter.format(760000)}
          </span>
          <span className="text-sm text-red-400 line-through">
            {"  "}
            {formatter.format(760000)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Item;
