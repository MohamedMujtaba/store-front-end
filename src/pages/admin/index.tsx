"use client";

import { AddItemDialog } from "@/components/AddItemDialog";
import FilterComponent from "@/components/FilterComponent";
import Table from "@/components/Table";
import axios from "axios";
import { Info } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const Admin = () => {
  const [items, setItems] = useState([]);
  const [addDialogIsOpen, setAddDialogIsOpen] = useState(false);
  const getData = async () => {
    try {
      const data = await axios.get(
        "https://store-back-end.vercel.app/api/v1/item"
      );
      setItems(data.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [items]);
  return (
    <div className="flex w-screen flex-col items-center">
      <Toaster />
      <Navbar />
      <Container>
        <FilterComponent />
        <AddItemDialog
          addDialogIsOpen={addDialogIsOpen}
          onOpenChange={setAddDialogIsOpen}
          refresh={getData}
        />
      </Container>
      <Table data={items} />
    </div>
  );
};

export default Admin;

const Navbar = () => {
  return (
    <div className="flex w-screen items-center justify-center">
      <nav className="w-[90%] max-w-5xl px-4">
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
      <div className="flex w-[90%] max-w-5xl items-center justify-between px-4 py-1">
        {children}
      </div>
    </div>
  );
};
