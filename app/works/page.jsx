'use client'

const works = () =>{
    return(
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <img
                src="/images/background3.jpg"
                alt="background"
                className="absolute inset-0 object-cover w-full h-full"
                style={{ zIndex: -1 }}
            />
            <div className="max-w-md px-6 py-4 bg-white rounded-sm shadow-lg hover:border-white">
            <h2 className="text-2xl font-bold mb-4">My previous works</h2>
                <ul>
                    <li><a href="https://drive.google.com/file/d/1609Acfxd7104lEYW5tWH_LaZg0KXMNOq/view?usp=drivesdk" 
                    className="text-blue-500 hover:text-blue-700">Work 1</a></li>
                    <li><a href="https://drive.google.com/file/d/1q8EbsDTc2ZFjEhRbf_qFGnbcImLGci5v/view?usp=drivesdk" 
                    className="text-blue-500 hover:text-blue-700">Work 2</a></li>
                    <li><a href="https://drive.google.com/file/d/1hNC1HBtDtepUFJ6_f60lZrAZefAl4t4m/view?usp=drive_link" 
                    className="text-blue-500 hover:text-blue-700">Work 3</a></li>
                </ul>
                <p>Here are samples of my previous projects which I did for my clients. You can refer to these links in order to see 
                them.</p>
            </div>
        </div>
    )
}

export default works;