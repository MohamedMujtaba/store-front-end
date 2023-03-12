import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { useEffect, useState } from "react";

const TagVariants = cva(
  "inline-flex mr-2 items-center justify-center px-2 py-0.5 text-xs rounded-md font-semibold xl:text-xs",
  {
    variants: {
      variant: {
        Success: "bg-green-200 text-green-900",
        Info: "bg-blue-200 text-blue-900",
      },
    },
  }
);

interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof TagVariants> {
  children: string;
}

const Tag: React.FC<TagProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const [bg, setBg] = useState("");
  const [color, setColor] = useState("");

  return (
    <span {...props} className={cn(TagVariants({ variant, className }))}>
      {children.toUpperCase()}
    </span>
  );
};

export default Tag;
