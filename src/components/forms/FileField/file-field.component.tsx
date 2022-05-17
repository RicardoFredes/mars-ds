import type { FileFieldProps } from "./file-field.types";

import classNames from "classnames";
import { useState } from "react";

import Loader from "@/components/basics/Loader";
import Notification from "@/components/basics/Notification";
import ToggleButton from "@/components/basics/ToggleButton";
import Caption from "@/components/typographies/Caption";
import Heading, { HeadingSizes } from "@/components/typographies/Heading";

import { cutText, dictionary, FIVE_MB, isValidExtension } from "./file-field.helper";

const FileField = ({
  className,
  onSelectFile,
  onUploadFile,
  extensions,
  placeholder = dictionary.placeholder,
  placeholderImage = dictionary.placeholderImage,
  maxSize = FIVE_MB,
  disabled = false,
  notifications,
  ...props
}: FileFieldProps) => {
  const cn = classNames("file-field", className, { "file-field--disabled": disabled });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const errors = { ...dictionary.notifications, ...notifications };

  const handleSetFile = async (file: File) => {
    setLoading(true);
    setFile(file);
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
    setLoading(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    handleSetFile(file);
  };

  const removeFile = () => {
    setFile(null);
    onSelectFile?.(null);
    onUploadFile?.(null);
  };

  if (loading) {
    return (
      <div className={cn}>
        <div className="file-field__content file-field__content--is-loading">
          <Loader size="lg" className="color-primary" />
        </div>
      </div>
    );
  }

  return (
    <div className={cn}>
      {file ? (
        <div className="file-field__content">
          <img
            className="file-field__content__image file-field__content__image--is-file"
            src={URL.createObjectURL?.(file)}
          />
          <Caption className="file-field__content__name">{cutText(file.name)}</Caption>
          <ToggleButton
            data-testid="remove-file-button"
            className="file-field__content__remove-button"
            iconName="close"
            variant="text"
            onClick={removeFile}
          />
        </div>
      ) : (
        <div className="file-field__content text-center">
          <img
            className="file-field__content__image file-field__content__image--is-default"
            height={164}
            src={placeholderImage}
          />
          <Heading level={5} size={HeadingSizes.XSmall}>
            {placeholder}
          </Heading>
        </div>
      )}
      <input
        {...props}
        data-testid="file-field"
        type="file"
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
};

export default FileField;
