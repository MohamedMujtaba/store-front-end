import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Tag from "@/components/Tag";
import List from "@/components/List";
import { useEffect, useState } from "react";
import axios from "axios";
import Item from "@/components/Item";
import SelectComponent from "@/components/SelectComponent";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";
import { Switch } from "@/components/ui/switch";
import FilterComponent from "@/components/FilterComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [items, setItems] = useState([]);
  const getData = async () => {
    try {
      const data = await axios.get(
        "https://store-back-end-three.vercel.app/api/v1/item"
      );
      setItems(data.data.items);
      console.log(data.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen pb-5">
        <Navbar />
        <Container>
          <div className="flex w-full items-start justify-end">
            <FilterComponent align="end" />
          </div>
        </Container>
        {/* <Card /> */}

        {/* <List href="/SeeMore/hot-sales" link="/" title="Hot Sales"  />
        <List href="/SeeMore" link="/" title="Iphones" /> */}
        <div className="flex w-screen items-center justify-center p-4">
          <div className=" grid w-full max-w-5xl grid-cols-1 place-items-center gap-8 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {items.map(
              (
                item: {
                  title: string;
                  compony: string;
                  status: string;
                  currentPrice: number;
                  hot: boolean;
                  images: {
                    public_id: string;
                    url: string;
                  }[];
                },
                index
              ) => {
                return (
                  // <Item
                  //   key={index}
                  //   item={{
                  //     title: item?.title,
                  //     compony: item?.compony,
                  //     status: item?.status,
                  //     prise: item?.prise,
                  //     hot: item?.hot,
                  //     images: item?.images,
                  //   }}
                  // />
                  <Card
                    item={{
                      title: item?.title,
                      compony: item?.compony,
                      status: item?.status,
                      price: item?.currentPrice,
                      hot: item?.hot,
                      images: item?.images,
                    }}
                    key={index}
                  />
                );
              }
            )}
          </div>
        </div>
      </main>
    </>
  );
}

const Navbar = () => {
  return (
    <div className="flex w-screen items-center justify-center">
      <nav className="w-[90%] max-w-5xl p-4">
        <Image
          className="aspect-square"
          src="/next.svg"
          alt="Next.js Logo"
          width={80}
          height={20}
          priority
        />
      </nav>
    </div>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen items-center justify-center">
      <div className="w-[90%] max-w-5xl px-4 py-1">{children}</div>
    </div>
  );
};
