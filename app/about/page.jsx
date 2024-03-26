'use client'
import Link from 'next/link';

const about = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <img
                src="/images/background2.jpg"
                alt="background"
                className="absolute inset-0 object-cover w-full h-full"
                style={{ zIndex: -1 }}
            />
            <div className="max-w-md px-6 py-4 bg-white rounded-sm shadow-lg hover:border-white">
                <h2 className="text-2xl font-bold mb-2">About me</h2>
                <p className="text-gray-700">
                I'm Abhishek Srivastava, a pro video editor with 5 years of experience. I specialize in wedding editing and post-production.
                 With skills in Adobe Premiere Pro and DaVinci Resolve, I create a visually stunning and emotionally captivating video 
                 that captures the essence of your special day. I've worked with foreign clients, so I understand their unique preferences. 
                 My services include professional editing, expert color correction, seamless audio integration, and timely delivery.
                </p>
                <div className="flex items-center justify-center">
                <Link href="/works">
                <button className="bg-blue-500 text-black font-bold py-2 px-4 rounded transition-colors duration-150 hover:bg-blue-700 hover:text-white">
                 My previous works
                </button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default about;
