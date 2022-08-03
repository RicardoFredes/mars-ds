import type { FileInputProps as CommonFileFieldProps } from "@/components/primitives/FileInput";

interface AvatarFieldProps extends CommonFileFieldProps {
  extensions: string[];
}

export type { AvatarFieldProps };
