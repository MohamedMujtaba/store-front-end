import React from "react";
import { Settings2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SelectComponent from "./SelectComponent";
import { Switch } from "./ui/switch";
const FilterComponent = ({ align }: { align?: "center" | "start" | "end" }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-10 p-0">
          <Settings2 className="h-4 w-4" />
          <span className="sr-only">Open popover</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-sm" align={align}>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Filters</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              What do want to find 🧐
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="compony">Compony</Label>
              <SelectComponent
                className="col-span-2 h-8"
                id="compony"
                data={["Samsung", "Iphone", "Redmi"]}
                placeholder="Compony"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="status">Status</Label>
              <SelectComponent
                className="col-span-2 h-8"
                data={["New", "Used", "Refurbish"]}
                placeholder="Status"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Hot 🔥</Label>
              <Switch />
            </div>
            {/* <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div> */}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterComponent;
