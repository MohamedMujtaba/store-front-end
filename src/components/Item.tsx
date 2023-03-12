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
const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="flex h-auto w-52 flex-col ">
      <div className="w- relative flex h-52 shrink-0 items-center justify-center overflow-hidden rounded-md bg-gray-200">
        <div className="absolute top-0 right-0 p-2">
          <Tag variant="Success">Hot</Tag>
        </div>
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
      <div>
        <p className="text-lg font-semibold xl:text-base">{item?.title}</p>
        <div className="">
          <Tag variant="Info">{item?.compony}</Tag>
          <Tag variant="Info">{item?.status}</Tag>
          {/* <Tag variant="Success">Hot</Tag> */}
        </div>
        <p className="mt-1 text-sm font-bold text-blue-500">250,000</p>
      </div>
    </div>
  );
};

export default Item;
