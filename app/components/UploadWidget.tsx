"use client";

import { CldUploadWidget } from "next-cloudinary";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UploadWidget = ({
  //@ts-ignore
  onUploadSuccess,
  //@ts-ignore
  property,
  resourceType = "video",
}) => {
  const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "";

  return (
    <CldUploadWidget
      uploadPreset={UPLOAD_PRESET || "q4qwsr07"}
      options={{
        multiple: false,
        maxFiles: 1,
        maxFileSize: 100 * 1024 * 1024, // Max 100 MB
        resourceType: resourceType,
      }}
      onSuccess={(result) => {
        //@ts-ignore
        const uploadedUrl = result.info?.secure_url;
        console.log("Upload Result:", result?.info);
        if (onUploadSuccess && uploadedUrl) {
          onUploadSuccess(uploadedUrl, property); // Pass URL to the parent
        }
      }}
    >
      {({ open }) => (
        <button
          className={
            "flex flex-row items-center justify-center btn btn-primary btn-outline"
          }
          onClick={() => open()}
        >
          <FontAwesomeIcon icon={faUpload} />
          <span>Upload File</span>
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadWidget;
