'use client'
import ImageUpload from '@/components/ImageUpload'
import Image from 'next/image'

export default function Home() {
  const handleImageUpload = (file: File) => {
    // Implement your image upload logic here
    console.log('Image uploaded:', file);
  };
  return (
    <main className="block">
      <h1 className="text-center font-bold my-6">Image Compressor</h1>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="">
          <ImageUpload onImageUpload={handleImageUpload} />
        </div>
      </div>

    </main>
  )
}
