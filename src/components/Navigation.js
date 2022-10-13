export default function Navigation() {
    return <div className='w-full h-24 absolute flex'>
        <div className='w-1/2 h-full flex items-center p-4'>
            <div className='h-12 w-12 bg-logo bg-cover flex items-center'>
                <div className='absolute h-[2px] w-[45%] bg-white/25 left-24' />
            </div>
        </div>
        <div className='w-1/2 h-full bg-white bg-opacity-20 backdrop-blur'>
        
        </div>
    </div>
}
