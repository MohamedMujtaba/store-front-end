import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SelectComponentProps {
  className?: string;
  id?: string;
  data: string[];
  placeholder: string;
  onValueChange: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  className,
  id,
  data,
  placeholder,
  onValueChange,
}) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className={className} id={id}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data?.map((item, index) => (
          <SelectItem key={index} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
