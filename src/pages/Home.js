function ExploreButton() {
    return <div 
        className='rounded-full bg-white h-56 w-56 
            flex justify-center items-center
            cursor-pointer
        '
    >
        <h4 className='text-black'>EXPLORE</h4>
    </div>
}

export default function Home() {
    return <div className='bg-home-desktop page-background p-32'>
        <div className='w-full h-1/2'>
            <h5 className='mb-0'>SO, YOU WANT TO TRAVEL TO</h5>
            <div className='w-full flex justify-between'>
                <div className='w-1/2 h-full'>
                    <h1 className='m-0 p-0'>SPACE</h1>
                    <p className='text-white text-lg w-[28rem]'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                </div>
                <ExploreButton />
            </div>
        </div>
    </div>
}
