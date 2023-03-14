import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface DropzoneProps {
  setImages: React.Dispatch<
    React.SetStateAction<(string | ArrayBuffer | null)[]>
  >;
}

const Dropzone: React.FC<DropzoneProps> = ({ setImages }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
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
    <div
      {...getRootProps()}
      className="flex w-full items-center justify-center"
    >
      <label className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="mb-3 h-10 w-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            PNG or JPG (SHOULD BE 960 x 960 )
          </p>
        </div>
        {/* <input type="file" className="hidden" /> */}
      </label>
      <input {...getInputProps()} className="hidden" id="dropzone-file" />
    </div>
  );
};

export default Dropzone;
