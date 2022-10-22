import React, { useState } from 'react';

export default function NavigationUnderline({ currentPage, name, isHovered }) {
    const [color, setColor] = useState('');
    if(currentPage === name && color !== 'bg-white') setColor('bg-white');
    if(currentPage !== name && color === 'bg-white') setColor('');
    if(isHovered && color === '') setColor('bg-[#979797]');
    if(!isHovered && color === 'bg-[#979797]') setColor('');

    return <div className={`transition-all duration-200 h-[3px] w-full ${color}`} />
}