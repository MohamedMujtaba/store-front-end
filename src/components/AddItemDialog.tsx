"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { Plus } from "lucide-react";
import { useState } from "react";
import Dropzone from "./DropZone";
import SelectComponent from "./SelectComponent";
import { Switch } from "./ui/switch";

export function AddItemDialog() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [compony, setCompony] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [images, setImages] = useState<(string | ArrayBuffer | null)[]>([]);
  const [hot, setHot] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(true);
  console.log({
    title,
    currentPrice: price,
    compony,
    status,
    images,
    hot,
    active,
  });

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("hi");

    try {
      const res = await axios.post(
        "https://store-back-end-three.vercel.app/api/v1/item",
        {
          title,
          currentPrice: price,
          compony,
          status,
          images,
          hot,
          active,
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-10 p-0">
          <Plus className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="mb-10 max-h-full overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
          <DialogDescription>
            Add new item to the data base , Make sure you did not leave any
            filed empty
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 max-md:flex max-md:flex-col max-md:items-start">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              required
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 max-md:flex max-md:flex-col max-md:items-start">
            <Label htmlFor="username" className="text-right">
              Price
            </Label>
            <Input
              required
              id="price"
              type="number"
              className="col-span-3"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 max-md:flex max-md:flex-col max-md:items-start">
            <Label htmlFor="username" className="text-right">
              Compony
            </Label>
            <SelectComponent
              onValueChange={(value) => setCompony(value as string)}
              data={["Samsung", "Iphone", "Redmi"]}
              placeholder="Compony"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 max-md:flex max-md:flex-col max-md:items-start">
            <Label htmlFor="username" className="text-right">
              Status
            </Label>
            <SelectComponent
              onValueChange={(value) => setStatus(value as string)}
              data={["New", "Used", "Refurbish"]}
              placeholder="Status"
            />
          </div>
          <div>
            {/* <Input
              type="file"
              multiple
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files) {
                  setImages(e.target.files);
                }
              }}
            /> */}
            <Dropzone setImages={setImages} />
          </div>
          <div className="flex gap-2 ">
            <div className="grid w-1/2 grid-cols-4 items-center gap-4 ">
              <Label htmlFor="username" className="col-span-2 text-right">
                Hot
              </Label>
              <Switch
                onCheckedChange={(checked) => setHot(checked)}
                checked={hot}
              />
            </div>
            <div className="grid w-1/2 grid-cols-4 items-center gap-4 ">
              <Label htmlFor="username" className="col-span-2 text-right">
                Active
              </Label>
              <Switch
                onCheckedChange={(checked) => setActive(checked)}
                checked={active}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleSubmit(e)
            }
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
