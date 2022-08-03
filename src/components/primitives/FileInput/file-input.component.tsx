import type { FileInputProps } from "./file-input.types";
import type { ChangeEvent } from "react";

import classNames from "classnames";

import Notification from "@/components/basics/Notification";

import { dictionary as commonDictionary, FIVE_MB, isValidExtension } from "./file-input.helper";

const FileInput = ({
  extensions,
  maxSize = FIVE_MB,
  notifications,
  className,
  onSelectFile,
  onSelectFileStart,
  onSelectFileEnd,
  onUploadFile,
  ...props
}: FileInputProps) => {
  const cn = classNames("file-input", className);

  const errors = { ...commonDictionary.notifications, ...notifications };

  const handleSelectFile = async (file: File) => {
    onSelectFileStart?.();
    onSelectFile?.(file);

    const updatedFile = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const result = reader.result;
        if (result) resolve(result.toString());
        else reject();
      };
    });

    onUploadFile?.(updatedFile);
    onSelectFileEnd?.();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      Notification.error(errors.notFound);
      return;
    }

    const extension = file.name.replace(/.*\./, "");

    if (!isValidExtension(extension, extensions)) {
      Notification.error(`${errors.notAllowed} ${extensions?.join(" ou ")}`);
      return;
    }

    if (file.size > maxSize) {
      const sizeInMB = Math.round(maxSize / 1024 / 1024);
      Notification.error(`${errors.tooBig} ${sizeInMB}MB`);
      return;
    }

    handleSelectFile(file);
  };

  return (
    <input type="file" className={cn} data-testid="file-input" onChange={handleChange} {...props} />
  );
};

export default FileInput;
