'use client'

const contact = () =>{
    return(
        <div className="bg-black h-screen flex flex-col justify-start items-center pt-20">
            <img src="/images/profile.jpeg" alt="Profile" className="h-60 w-60 rounded-full mb-10" />
            <h1 className="text-3xl font-bold text-white mb-5">Get in touch</h1>
            <div className="flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/abhishek-srivastava-2652272b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.png" alt="Icon 1" className="h-10 w-10 hover:scale-110 transition-transform duration-200" />
                </a>
                <a href="mailto:a41529116@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/gmail.png" alt="Icon 2" className="h-10 w-10 hover:scale-110 transition-transform duration-200" />
                </a>
            </div>
        </div>
    )
}

export default contact;