import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface DropzoneProps {
  setImages: React.Dispatch<
    React.SetStateAction<(string | ArrayBuffer | null)[]>
  >;
}

const Dropzone: React.FC<DropzoneProps> = ({ setImages }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file: File) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.readAsDataURL(file);
        reader.onload = () => {
          // Do whatever you want with the file contents
          setImages((priv) => [...priv, reader.result]);
        };
      });
    },
    [setImages]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag n drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default Dropzone;
