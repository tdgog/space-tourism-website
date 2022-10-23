import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import images from '../assets/technology';
import websitedata from "../data/data.json";
const tech = websitedata.technology;

function TechImage({ data }) {
    return <img src={images[data.images.portrait]} className='h-full aspect-square select-none' />
}

function TechInfo({ data }) {
    return <div className='flex-1 px-20 flex flex-col justify-center'>
        <h5 className='text-[16px]'>THE TERMINOLOGY...</h5>
        <h3>{data.name.toUpperCase()}</h3>
        <p>{data.description}</p>
    </div>
}

function Selector({ currentPage, setCurrentPage }) {
    return <div className='flex flex-col justify-center space-y-5'>
        {tech.map((term, i) => {
            const buttonStyle = term === currentPage 
                            ? 'bg-white'
                            : 'bg-transparent border-2 border-white/25 hover:border-white cursor-pointer';
            const textStyle = term === currentPage ? 'text-black' : 'text-white';
            return <div 
                key={i}
                className={`transition-all rounded-full h-20 aspect-square flex justify-center items-center ${buttonStyle}`}
                onClick={() => setCurrentPage(term)}
            >
                <h4 className={`transition-all ${textStyle}`}>{i + 1}</h4>
            </div>
        })}
    </div>
}

export default function Technology() {
    const [currentPage, setCurrentPage] = useState(tech[0]);

    return <div className='bg-tech-desktop page-background pt-52 pl-52 pb-24 flex-col'>
        <PageTitle number={3}>SPACE LAUNCH 101</PageTitle>
        <div className='w-full flex-1 flex'>
            <Selector currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <TechInfo data={currentPage} />
            <TechImage data={currentPage} />
        </div>
    </div>
}