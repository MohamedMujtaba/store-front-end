import { AddItemDialog } from "@/components/AddItemDialog";
import FilterComponent from "@/components/FilterComponent";
import { Info } from "lucide-react";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <Navbar />
      <Container>
        <FilterComponent />
        <AddItemDialog />
      </Container>
    </div>
  );
};

export default index;
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
