import Image from 'next/image';
import React from 'react';
import FadeIn from './parts/FadeIn';

const Gallery = () => {
	return (
		<div className='text-center mb-[493px]'>
			{/* <div className='text-center mb-[493px]'> */}
			<FadeIn>
				<section className='mb-[40px]'>GALLERY</section>
			</FadeIn>
			<FadeIn>
				<div className='mx-[30px]'>
					<Image
						className='w-full md:w-auto md:mx-auto md:-translate-x-[192.5px] mb-[80px]'
						src={'/img/flower1.jpg'}
						alt={'gallery'}
						width={355}
						height={488}
					/>
				</div>
			</FadeIn>
			<FadeIn>
				<div className='mx-[30px]'>
					<Image
						className='w-full md:w-auto md:mx-auto md:translate-x-[192.5px] mb-[80px]'
						src={'/img/flower2.jpg'}
						alt={'gallery'}
						width={355}
						height={235}
					/>
				</div>
			</FadeIn>
			<FadeIn>
				<div className='mx-[30px]'>
					<Image
						className='w-full md:w-auto md:mx-auto md:-translate-x-[177.5px] mb-[80px]'
						src={'/img/flower3.jpg'}
						alt={'gallery'}
						width={355}
						height={335}
					/>
				</div>
			</FadeIn>
			<FadeIn>
				<div className='mx-[30px]'>
					<Image
						className='w-full md:w-auto md:mx-auto md:translate-x-[192.5px] mb-[80px]'
						src={'/img/flower4.jpg'}
						alt={'gallery'}
						width={355}
						height={533}
					/>
				</div>
			</FadeIn>
			<FadeIn>
				<div className='mx-[30px]'>
					<Image
						className='w-full md:w-auto md:mx-auto md:-translate-x-[192.5px] mb-[80px]'
						src={'/img/flower5.jpg'}
						alt={'gallery'}
						width={355}
						height={444}
					/>
				</div>
			</FadeIn>
			<FadeIn>
				<div className='mx-[30px]'>
					<Image
						className='w-full md:w-auto md:mx-auto md:translate-x-[192.5px]'
						src={'/img/flower6.jpg'}
						alt={'gallery'}
						width={355}
						height={235}
					/>
				</div>
			</FadeIn>
		</div>
	);
};

export default Gallery;
