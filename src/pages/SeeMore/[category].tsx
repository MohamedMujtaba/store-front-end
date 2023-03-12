import Item from "@/components/Item";
import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  const { category, keyword } = router.query;
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center pb-6">
      <div className=" fixed flex h-16 w-full items-center justify-center bg-white p-6 ">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
          {keyword}
        </h1>
      </div>
      <div className="flex max-w-5xl flex-col flex-wrap items-center gap-8 pt-16 sm:flex-row sm:justify-center ">
        {/* {[1, 2, 3, 4, 5].map((i, index) => {
          return <Item key={index} />;
        })} */}
      </div>
    </div>
  );
};

export default Category;
