import React, { useState } from 'react';
import PageTitle from "../components/PageTitle";
import NavigationUnderline from '../components/NavigationUnderline';
import images from '../assets/destination';
import websitedata from "../data/data.json";
const destinations = websitedata.destinations;

function Planet({ data }) {
    return <img src={images[data.images.png]} className='w-3/5 aspect-square select-none' />
}

function Details({ data }) {
    return <div className='w-full'>
        <div className='w-full h-[2px] bg-[#383B4B] mb-10' />
        <div className='w-full flex space-x-20'>
            <div>
                <h5 className='text-[14px] text-blue'>AVG. DISTANCE</h5>
                <h4 className='text-[28px]'>{data.distance.toUpperCase()}</h4>
            </div>
            <div>
                <h5 className='text-[14px] text-blue'>EST. TRAVEL TIME</h5>
                <h4 className='text-[28px]'>{data.travel.toUpperCase()}</h4>
            </div>
        </div>
    </div>
}

function PlanetInformation({ data }) {
    return <div>
        <h1>{data.name.toUpperCase()}</h1>
        <p className='mb-20'>{data.description}</p>
        <Details data={data} />
    </div>
}

function SelectorElement({ data, currentPage, setCurrentPage }) {
    const [isHovered, setIsHovered] = useState(false);
    return <div 
        className='flex flex-col transition-all' 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
            setCurrentPage(data);
        }}
    > 
        <div className='h-full flex flex-row items-center cursor-pointer select-none'>
            <p className='text-2xl tracking-[.18em] font-barlow-cr'>{data.name.toUpperCase()}</p>
        </div>
        <NavigationUnderline
            currentPage={currentPage}
            name={data}
            isHovered={isHovered}
        />
    </div>
}

function Selector({ currentPage, setCurrentPage }) {
    return <div className='w-full h-20 flex space-x-10'>
        {destinations.map(data => <SelectorElement 
            data={data} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
        />)}
    </div>
}

export default function Destinations() {
    const [currentPage, setCurrentPage] = useState(destinations[0]);

    return <div className='bg-dest-desktop page-background pt-52 pl-52 pb-24 pr-24 flex flex-col'>
        <PageTitle number={1}>PICK YOUR DESTINATION</PageTitle>
        <div className='w-full h-full flex'>
            <div className='w-3/5 h-full flex items-center justify-center'>
                <Planet data={currentPage} />
            </div>
            <div className='w-2/5 h-full'>
                <Selector currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <PlanetInformation data={currentPage} />
            </div>
        </div>
    </div>
}
