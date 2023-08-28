'use client'
import ImageUpload from '@/components/ImageUpload'
import imageCompression from 'browser-image-compression';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [compressedImage, setCompressedImage] = useState<File | null>(null);

  const handleImageUpload = async (file: File) => {
    try {
      const options = {
        maxSizeMB: 0.2, // Set the maximum size for compressed image (in megabytes)
      };

      const compressedFile = await imageCompression(file, options);
      setCompressedImage(compressedFile);

      console.log('Original image:', file);
      console.log('Compressed image:', compressedFile);
    } catch (error) {
      console.error('Error compressing image:', error);
    }
  };
  return (
    <main className="block">
      <h1 className="text-center relative font-bold my-6">Image Compressor</h1>
      {compressedImage && <div className='flex relative justify-center'>
        <div className="mr-4 text-center fixed bg-black p-2">Size: {compressedImage.size / 1000} Kb | <a className='bg-blue-800 px-3' href={URL.createObjectURL(compressedImage)}>Download</a></div>

        <Image
          src={URL.createObjectURL(compressedImage)}
          alt="Uploaded"
          width={10220000}
          height={100000}
          className="max-w-lg"
        />
      </div>
      }
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="">
          <ImageUpload onImageUpload={handleImageUpload} />
        </div>
      </div>

    </main>
  )
}
