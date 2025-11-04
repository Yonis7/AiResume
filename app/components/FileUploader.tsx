import React, { useCallback } from 'react'
// Import the useDropzone hook for drag-and-drop file uploads
import { useDropzone } from 'react-dropzone'

const FileUploader = () => {
    // onDrop is called when files are dropped or selected
    const onDrop = useCallback(acceptedFiles => {
        // acceptedFiles: array of File objects chosen by the user
    }, [])

    // getRootProps, getInputProps: helpers for setting up the drop area and file input
    // isDragActive: true when a file is being dragged over the drop area
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        // This div is the drop area for files
        <div className='w-full gradient-border'>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>

        </div>
    )
}

export default FileUploader