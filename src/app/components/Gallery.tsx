import Image from 'next/image';
import React from 'react';

const Gallery = () => {
	return (
		<div className='text-center mb-[493px]'>
			<section className='mb-[40px]'>GALLERY</section>
			<Image
				className='mx-auto -translate-x-[192.5px] mb-[80px]'
				src={'/img/flower1.jpg'}
				alt={'gallery'}
				width={355}
				height={488}
			/>
			<Image
				className='mx-auto translate-x-[192.5px] mb-[80px]'
				src={'/img/flower2.jpg'}
				alt={'gallery'}
				width={355}
				height={235}
			/>
			<Image
				className='mx-auto -translate-x-[177.5px] mb-[80px]'
				src={'/img/flower3.jpg'}
				alt={'gallery'}
				width={355}
				height={335}
			/>
			<Image
				className='mx-auto translate-x-[192.5px] mb-[80px]'
				src={'/img/flower4.jpg'}
				alt={'gallery'}
				width={355}
				height={533}
			/>
			<Image
				className='mx-auto -translate-x-[192.5px] mb-[80px]'
				src={'/img/flower5.jpg'}
				alt={'gallery'}
				width={355}
				height={444}
			/>
			<Image
				className='mx-auto translate-x-[192.5px]'
				src={'/img/flower6.jpg'}
				alt={'gallery'}
				width={355}
				height={235}
			/>
		</div>
	);
};

export default Gallery;
