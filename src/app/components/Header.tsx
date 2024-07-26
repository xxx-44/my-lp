import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Header = () => {
	const [buttonActive, setButtonActive] = useState(false);
	const [menuActive, setMenuActive] = useState(false);
	const buttonTogle = () => {
		setButtonActive(!buttonActive);
		setMenuActive(true);
	};
	return (
		<div className='p-7'>
			<div className='flex justify-between items-center'>
				<div className='z-30'>
					<Link href='#home' className='flex justify-center items-center font-light gap-2'>
						<FaArrowAltCircleUp />
						<div>PAGE_TOP</div>
					</Link>
				</div>
				<button className='flex flex-col gap-[9.5px] w-[30px] h-[30px] z-30' onClick={buttonTogle}>
					<span
						className={`transition-all duration-500 w-[30px] h-[1px] origin-top-left bg-white inline-block ${
							buttonActive && 'rotate-45'
						}`}
					></span>
					<span
						className={`transition-all duration-500 w-[30px] h-[1px] bg-white inline-block ${
							buttonActive && 'opacity-0'
						}`}
					></span>
					<span
						className={`transition-all duration-500 w-[30px] h-[1px] origin-top-left bg-white inline-block ${
							buttonActive && '-rotate-45'
						}`}
					></span>
				</button>
			</div>
			<div className={`fixed top-0 left-0 w-full h-screen bg-black opacity-50 ${buttonActive ? 'block' : 'hidden'}`}>
				{/* 背景を暗くするための要素 */}
			</div>
			<div>
				{menuActive && (
					<div className={`text-center z-20 ${buttonActive ? 'animate-fade-in-down' : 'animate-fade-out-down'}`}>
						<Link href='#home' className='block hover:scale-105  transition-all duration-300'>
							HOME
						</Link>
						<Link href='#about' className='block  hover:scale-105 transition-all duration-300' onClick={buttonTogle}>
							ABOUT ME
						</Link>
						<Link href='#gallery' className='block  hover:scale-105  transition-all duration-300' onClick={buttonTogle}>
							GALLERY
						</Link>
						<Link href='#comment' className='block  hover:scale-105  transition-all duration-300' onClick={buttonTogle}>
							COMMENT
						</Link>
						<Link href='#contact' className='block  hover:scale-105  transition-all duration-300' onClick={buttonTogle}>
							CONTACT
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
