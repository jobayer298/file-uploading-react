import React, { useState } from "react";
import Utils from "../Utils/Utils";
import useFileCount from "../Utils/useFileCount";

const Modal = ({ isOpen, onClose, id }) => {
  const [card] = Utils();
  const { file, isLoading, refetch } = useFileCount(id);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log(...selectedFiles);
    if (selectedFiles.length === 0) {
      console.log("No files selected");
      return;
    }

    const formData = new FormData();
    selectedFiles.map((file) => formData.append(`files`, file));
    // formData.append("totalAttachments", total_files);
    // formData.append("hello", 5);
    // console.log(total_files);

    try {
      const response = await fetch(`http://localhost:5000/upload/${id}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Files uploaded successfully");
        refetch()
      } else {
        console.log("Error uploading files");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
    setSelectedFiles([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white p-10 relative rounded shadow-lg">
        <form
          action="/upload"
          method="post"
          onSubmit={handleUpload}
        >
          <input
            type="file"
            name="files"
            multiple
            onChange={handleFileChange}
          />
          {selectedFiles.length > 0 && (
            <div>
              <p>Selected Files:</p>
              <ul>
                {selectedFiles.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
          <p
            onClick={onClose}
            className="bg-gray-300 cursor-pointer hover:bg-gray-400 font-bold px-3 py-1 absolute top-0 right-0 rounded"
          >
            X
          </p>
          <button className="bg-slate-300 p-1 mt-2" type="submit">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
