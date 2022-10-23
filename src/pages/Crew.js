import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';
import images from '../assets/crew';
import websitedata from "../data/data.json";
const crew = websitedata.crew;

function MemberInfo({ data }) {
    return <div className='w-full'>
        <h4 className='text-white/50'>{data.role.toUpperCase()}</h4>
        <h3>{data.name.toUpperCase()}</h3>
        <p className='text-blue w-full'>{data.bio}</p>
    </div>
}

function MemberPhoto({ data }) {
    return <div className='w-1/2 h-full flex justify-center'>
        <img src={images[data.images.png]} className='h-full select-none' />
    </div>
}

function Selector({ currentPage, setCurrentPage }) {
    return <div className='flex space-x-5'>
        {crew.map((member, i) => {
            const other = member === currentPage 
                                        ? 'bg-white'
                                        : 'bg-white/20 hover:bg-white/50 cursor-pointer';
            return <div
                key={i}
                className={`transition-all rounded-full h-4 aspect-square ${other}`}
                onClick={() => setCurrentPage(member)}
            />
        })}
    </div>
}

export default function Crew() {
    const [currentPage, setCurrentPage] = useState(crew[0]);

    return <div className='bg-crew-desktop page-background pt-52 pl-52 pr-24'>
        <div className='w-1/2 h-full pb-24 flex flex-col justify-between'>
            <PageTitle number={2}>MEET YOUR CREW</PageTitle>
            <MemberInfo data={currentPage} />
            <Selector currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
        <MemberPhoto data={currentPage} />
    </div>
}