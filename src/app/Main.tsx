import Image from 'next/image';
import React from 'react';

const Main = () => {
	return (
		<div className='mb-[120px]'>
			<div className='w-full grid grid-cols-3 mb-[121px]'>
				<Image className='opacity-80 w-full' src={'/img/mainvisual1.jpg'} alt={'main'} width={480} height={600} />
				<Image className='opacity-80 w-full' src={'/img/mainvisual2.jpg'} alt={'main'} width={480} height={600} />
				<Image className='opacity-80 w-full' src={'/img/mainvisual3.jpg'} alt={'main'} width={480} height={600} />
			</div>
			<h1 className='text-[100px] text-center tracking-[3px] leading-[125px]'>
				Hello Flower! <br /> FA EXHIBITION 2021
			</h1>
		</div>
	);
};

export default Main;
