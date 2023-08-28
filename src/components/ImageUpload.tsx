'use client'
import React, { useCallback, useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import Dropzone from 'react-dropzone';
import Image from 'next/image';
import formatSize from '@/utils/formatSize';

interface ImageUploadProps {
    onImageUpload: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        console.log(acceptedFiles, 'acceptedFiels')
        if (acceptedFiles.length) {
            const file = acceptedFiles[0];
            setSelectedFile(file);
            onImageUpload(file);
        }

    }, [onImageUpload]);

    return (
        <div className="image-upload">
            {selectedFile && (
                <div className='flex max-w-lg justify-center relative'>
                    <div className="mr-4 text-center bg-black p-2">Size: {formatSize(selectedFile.size)}
                        <Image
                            width={10000000000}
                            height={100000000}
                            src={URL.createObjectURL(selectedFile)}
                            alt="Uploaded image"
                            className="max-w-full max-h-48 mx-auto my-4"
                        /></div>
                </div>)
            }
            <Dropzone onDrop={onDrop} accept={{ 'image/jpeg': ['.jpeg', '.png', '.jpg'] }} multiple={false}>
                {({ getRootProps, getInputProps }) => (
                    <div
                        className="dropzone border-2 border-dashed border-gray-300 p-6 cursor-pointer"
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        {selectedFile ? (
                            <div className='flex items-center justify-between'>Replace the current image  <MdCloudUpload className="text-4xl mb-2" /></div>
                        ) : (
                            <div className="flex flex-col justify-center items-center text-gray-500">
                                <MdCloudUpload className="text-4xl mb-2" />
                                <p>Drag & drop an image here or click to select</p>
                            </div>
                        )}
                    </div>
                )}
            </Dropzone>
        </div>
    );
};

export default ImageUpload;
