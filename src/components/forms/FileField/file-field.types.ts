interface FileFieldProps extends React.HTMLProps<HTMLInputElement> {
  onSelectFile?: (file: File | null) => void;
  onUploadFile?: (file: string | null) => void;
  extensions?: string[];
  maxSize?: number;
  placeholderImage?: string;
  notifications?: {
    notFound?: string;
    notAllowed?: string;
    tooBig?: string;
  };
}

export type { FileFieldProps };
