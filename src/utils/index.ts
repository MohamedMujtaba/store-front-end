import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ZlibOptions } from "zlib";
import { ZodType } from "zod";

export const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
};

export const validateZod = async (schema: ZodType, i: {}) => {
  try {
    const v = await schema.safeParseAsync(i);
    return v.success;
  } catch (error) {
    // const validationError = fromZodError(error as ZodError);
    return false;
  }
};
