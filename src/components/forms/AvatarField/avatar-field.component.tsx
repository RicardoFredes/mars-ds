import type { AvatarFieldProps } from "./avatar-field.types";

import classNames from "classnames";
import { useState } from "react";

import Icon from "@/components/basics/Icon";
import FileInput, { FIVE_MB } from "@/components/primitives/FileInput";
import Caption from "@/components/typographies/Caption";
import Text, { TextSizes } from "@/components/typographies/Text";

import { dictionary } from "./avatar-field.helper";

const AvatarField = ({
  className,
  extensions = ["jpg, jpeg, png"],
  maxSize = FIVE_MB,
  src,
  ...props
}: AvatarFieldProps) => {
  const [file, setFile] = useState<File | null>(null);

  const cn = classNames("avatar-field", className);
  const overlayCn = classNames("avatar-field__overlay", {
    "avatar-field__overlay--has-image": file,
  });

  const captionText = dictionary.caption(extensions, maxSize);

  const handleSelectFile = (file: File | null) => setFile(file);

  return (
    <div className={cn} {...props}>
      <label className="avatar-field__content">
        <FileInput
          name="file"
          title={dictionary.alt}
          accept={dictionary.acceptMimeTypes}
          className="avatar-field__input"
          onSelectFile={handleSelectFile}
          maxSize={maxSize}
          {...props}
        />

        {(file || src) && (
          <img
            src={file ? URL.createObjectURL?.(file) : src}
            alt={dictionary.alt}
            className="avatar-field__preview"
          />
        )}

        <div className={overlayCn}>
          <Icon name="camera" />
          <Text size={TextSizes.Small}>{dictionary.overlayText}</Text>
        </div>
      </label>

      <Caption
        className="avatar-field__caption"
        data-testid="avatar-field-caption"
        dangerouslySetInnerHTML={{ __html: captionText }}
      />
    </div>
  );
};

export default AvatarField;
