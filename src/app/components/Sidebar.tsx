import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
	return (
		<div className='flex flex-col text-sm z-50'>
			<Link
				href='https://astro-peach-sigma.vercel.app/'
				className='font-light tracking-widest text-gray-200 py-3 border border-gray-400 px-7  transition duration-200 hover:text-gray-400  bg-black -rotate-90 origin-bottom-right'
			>
				FOR MY BLOG
			</Link>

			<Link
				href='https://github.com/xxx-44'
				className='mt-[118px] font-light tracking-widest text-gray-200 transition duration-200 hover:text-gray-400 py-3 border border-gray-400 px-7 bg-black -rotate-90 origin-bottom-right'
			>
				FOR MY GITHUB
			</Link>
		</div>
	);
};

export default Sidebar;
