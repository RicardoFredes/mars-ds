import type { HTMLProps } from "react";

interface FileInputProps extends HTMLProps<HTMLInputElement> {
  extensions?: string[];
  maxSize?: number;
  placeholderImage?: string;
  notifications?: {
    notFound?: string;
    notAllowed?: string;
    tooBig?: string;
  };
  onSelectFile?: (file: File | null) => void;
  onSelectFileStart?: VoidFunction;
  onSelectFileEnd?: VoidFunction;
  onUploadFile?: (file: string | null) => void;
}

export type { FileInputProps };
