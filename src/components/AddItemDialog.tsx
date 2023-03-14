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
import { validateZod } from "@/utils";
import axios from "axios";
import { Loader2, Plus } from "lucide-react";
import React, { useState } from "react";
import { z } from "zod";
import Dropzone from "./DropZone";
import SelectComponent from "./SelectComponent";
import { Switch } from "./ui/switch";
import { toast } from "react-hot-toast";

interface AddItemDialogProps {
  addDialogIsOpen: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  refresh: () => Promise<void>;
}

const ItemSchema = z.object({
  title: z.string(),
  price: z.number(),
  compony: z.string(),
  status: z.string(),
  images: z.array(z.string()).nonempty(),
});

export const AddItemDialog: React.FC<AddItemDialogProps> = ({
  addDialogIsOpen,
  onOpenChange,
  refresh,
}) => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>();
  const [compony, setCompony] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [images, setImages] = useState<(string | ArrayBuffer | null)[]>([]);
  const [hot, setHot] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (
      await validateZod(ItemSchema, {
        title,
        price: Number(price),
        compony,
        status,
        images,
      })
    ) {
      try {
        setLoading(true);
        const res = await axios.post(
          "https://store-back-end.vercel.app/api/v1/item",
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
        toast.success("Successfully created a new Item");
        refresh();
        onOpenChange(false);
        setLoading(false);
        setTitle("");
        setPrice(undefined);
        setCompony("");
        setStatus("");
        setImages([]);
        setHot(false);
        setActive(true);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong 😪");

        setLoading(false);
      }
    } else {
      toast.error("Make sure you did provide every require felid");
    }
  };

  return (
    <Dialog open={addDialogIsOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-10 p-0">
          <Plus className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-full overflow-y-auto py-10 sm:max-w-2xl">
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
            disabled={loading}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleSubmit(e)
            }
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
