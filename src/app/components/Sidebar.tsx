import React from 'react';

const Sidebar = () => {
	return (
		<div className='flex flex-col text-sm'>
			<button className='font-light tracking-widest text-gray-200 py-3 border border-gray-400 px-7  transition duration-200 hover:text-gray-400  bg-black -rotate-90 origin-bottom-right'>
				FOR EXHIBITOR
			</button>
			<button className='mt-[118px] font-light tracking-widest text-gray-200 transition duration-200 hover:text-gray-400 py-3 border border-gray-400 px-6 bg-black -rotate-90 origin-bottom-right'>
				FOR EXHIBITOR
			</button>
		</div>
	);
};

export default Sidebar;
