import type { FileFieldProps } from "./file-field.types";

import classNames from "classnames";
import { useState } from "react";

import Loader from "@/components/basics/Loader";
import ToggleButton from "@/components/basics/ToggleButton";
import FileInput from "@/components/primitives/FileInput";
import Caption from "@/components/typographies/Caption";
import Heading, { HeadingSizes } from "@/components/typographies/Heading";
import { cutText } from "@/services/string";

import { dictionary } from "./file-field.helper";

const FileField = ({
  className,
  onSelectFile,
  onUploadFile,
  placeholder = dictionary.placeholder,
  placeholderImage = dictionary.placeholderImage,
  disabled = false,
  ...props
}: FileFieldProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const cn = classNames("file-field", className, { "file-field--disabled": disabled });

  const handleSelectFile = (file: File | null) => {
    setFile(file);
    onSelectFile?.(file);
  };

  const handleUploadFile = (file: string | null) => {
    if (!file) return;
    onUploadFile?.(file);
  };

  const handleSelectFileStart = () => setLoading(true);
  const handleSelectFileEnd = () => setLoading(false);

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

      <FileInput
        disabled={disabled}
        onSelectFile={handleSelectFile}
        onUploadFile={handleUploadFile}
        onSelectFileStart={handleSelectFileStart}
        onSelectFileEnd={handleSelectFileEnd}
        {...props}
      />
    </div>
  );
};

export default FileField;
