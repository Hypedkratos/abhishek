'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen flex justify-center items-center">
      <img
        src="/images/background.jpg"
        alt="background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50 blur"></div>
      <div className="text-white text-center z-10">
        <p className="text-2xl sm:text-4xl font-bold">Hello !</p>
        <span className="text-4xl sm:text-6xl font-bold inline-block hover:scale-110 transition-transform">
          I am Abhishek</span>
        <div className="mt-4">
          <Link href="/about" >
            <button className="bg-blue-500 text-black font-bold py-2 px-4 rounded transition-colors duration-150 hover:bg-blue-700 hover:text-white">
            About me
            </button>
          </Link>
        </div>
      </div>
      <Link href="/contact">
        <div className="absolute top-0 right-0 text-white p-2 cursor-pointer">
          <p className="text-md mr-2">Contact me</p>
        </div>
      </Link>
      <div className="absolute bottom-0 left-0 right-0 text-white text-center p-2">
        Copyright © abhishek-2024
      </div>
    </div>
  );
}
