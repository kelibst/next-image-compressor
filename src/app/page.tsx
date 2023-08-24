import ImageUpload from '@/components/ImageUpload'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center font-bold">Image Compressor</h1>
      <div className="z-10 max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ImageUpload />
      </div>
    </main>
  )
}
