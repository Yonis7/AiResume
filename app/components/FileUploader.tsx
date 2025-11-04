import React, { useCallback, useState } from "react";
// Import the useDropzone hook for drag-and-drop file uploads
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}

const FileUploader = () => {

    const [file, setFile] = useState();

    // onDrop is called when files are dropped or selected
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // acceptedFiles: array of File objects chosen by the user
        const file = acceptedFiles[0] || null;

    }, []);

    // getRootProps, getInputProps: helpers for setting up the drop area and file input
    // isDragActive: true when a file is being dragged over the drop area
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        // This div is the drop area for files
        <div className="w-full gradient-border">
            <div {...getRootProps()}>
                <input {...getInputProps()} />

                <div className="space-y-4 cursor-pointer">
                    <div className="mx-auto w-16 h-16 flex items-center justify-center mb-2">
                        <img src="/icons/info.svg" alt="upload" className="size-20" />
                    </div>

                    {file ? (
                        <div>

                        </div>
                    ) : (
                        <div>
                            <p className="text-lg text-gray-500">
                                <span className="font-semibold">
                                    Click to upload
                                </span> or drag and drop
                            </p>
                            <p className="text-lg text-gray-500">PDF (max 20 MB)</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default FileUploader;
