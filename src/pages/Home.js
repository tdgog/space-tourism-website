function ExploreButton() {
    return <div 
        className='rounded-full bg-white h-56 w-56 
            flex justify-center items-center
            cursor-pointer
        '
    >
        <p className='text-bellefair text-2xl'>EXPLORE</p>
    </div>
}

export default function Home() {
    return <div className='h-screen w-screen p-32 bg-home-desktop bg-no-repeat bg-cover flex items-end'>
        <div className='w-full h-1/2'>
            <p className='text-white text-barlow-cr text-2xl tracking-widest mb-5'>SO, YOU WANT TO TRAVEL TO</p>
            <div className='w-full flex justify-between'>
                <div className='w-1/2 h-full'>
                    <h1 className='text-white text-bellefair text-9xl'>SPACE</h1>
                    <p className='text-white text-lg w-96'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>
                <ExploreButton />
            </div>
        </div>
    </div>
}
