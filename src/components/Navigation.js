import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { intAs2Char } from '../utils/Formatting';
import NavigationUnderline from './NavigationUnderline';

function NavigationElement(props) {
    const {
        index, 
        name = '',
        route = '/',
        currentPage = name, 
        setCurrentPage = () => console.log("Something went wrong...")
    } = props;
    
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    return <div 
        className='flex flex-col transition-all' 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
            setCurrentPage(name);
            navigate(route);
        }}
    > 
        <div className='h-full flex flex-row items-center cursor-pointer select-none'>
            <p className='text-xl font-barlow-cb mr-2'>{intAs2Char(index)}</p>
            <p className='text-xl font-barlow-cr'>{name}</p>
        </div>
        <NavigationUnderline
            currentPage={currentPage}
            name={name}
            isHovered={isHovered}
        />
    </div>
}

export default function Navigation() {
    const pages = [
        {
            name: 'HOME', 
            route: '/'
        },
        {
            name: 'DESTINATION', 
            route: '/destinations'
        },
        {
            name: 'CREW', 
            route: '/'
        },
        {
            name: 'TECHNOLOGY',
            route: '/'
        }
    ];

    const [currentPage, setCurrentPage] = useState(pages[0].name);

    return <div className='w-full h-24 absolute flex mt-12 pl-12'>
        <div className='w-1/2 h-full flex items-center p-4'>
            <div className='h-12 w-12 bg-logo bg-cover flex items-center'>
                <div className='absolute h-[2px] w-[45%] bg-white/25 left-[9%] z-10' />
            </div>
        </div>
        <div className='w-1/2 h-full bg-white bg-opacity-20 backdrop-blur flex justify-evenly px-32'>
            {pages.map((page, i) => {
                return <NavigationElement
                    key={i}
                    index={i}
                    name={page.name}
                    route={page.route}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            })}
        </div>
    </div>
}
