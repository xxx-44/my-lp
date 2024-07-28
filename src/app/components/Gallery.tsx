import Image from 'next/image';
import React from 'react';
import FadeIn from './parts/FadeIn';

const Gallery = () => {
	return (
		<div className='text-center mb-[493px]'>
			{/* <div className='text-center mb-[493px]'> */}
			<FadeIn>
				<section className='mb-[80px]'>GALLERY</section>
			</FadeIn>
			<FadeIn>
				<div className='mx-[30px] relative'>
					<a
						href='https://astro-peach-sigma.vercel.app/posts/chat/'
						className='inline-block md:mx-auto md:-translate-x-[192.5px] mb-[90px] opacity-80 hover:opacity-100 hover:-translate-y-5 transition-all duration-300 hover:scale-105'
					>
						{/* <Image
							className='w-full md:w-auto rounded-3xl'
							src={'/img/chat.png'}
							alt={'gallery'}
							width={600}
							height={600}
						/> */}
						<div className='w-[600px] h-[600px]'>
							<video src='/chat.mp4' className='w-full md:w-auto rounded-3xl' controls playsInline />
						</div>
					</a>
					{/* <div className='scale-y-[-1] absolute invisible md:visible'>
						<div className='reflectEF'></div>
						<Image src={'/img/chat.png'} alt={'gallery'} width={600} height={400} className=' w-full' />
					</div> */}
				</div>
			</FadeIn>
			<FadeIn>
				<div className='mx-[30px]'>
					<a
						href='https://astro-peach-sigma.vercel.app/posts/tasks/'
						className='inline-block md:mx-auto md:translate-x-[192.5px] mb-[90px]  opacity-80 hover:opacity-100 hover:-translate-y-5 transition-all duration-300 hover:scale-105'
					>
						<Image
							className='w-full md:w-auto rounded-3xl'
							src={'/img/task.png'}
							alt={'gallery'}
							width={600}
							height={400}
						/>
					</a>
				</div>
			</FadeIn>
			<FadeIn>
				<div className='mx-[30px]'>
					<a
						href='https://astro-peach-sigma.vercel.app/posts/poke/'
						className='inline-block md:mx-auto md:-translate-x-[192.5px] mb-[90px]  opacity-80 hover:opacity-100 hover:-translate-y-5 transition-all duration-300 hover:scale-105'
					>
						<Image
							className='w-full md:w-auto  rounded-3xl'
							src={'/img/poke.png'}
							alt={'gallery'}
							width={600}
							height={400}
						/>
					</a>
				</div>
			</FadeIn>
			<FadeIn>
				<div className='mx-[30px]'>
					<a
						href='https://astro-peach-sigma.vercel.app/posts/blog/'
						className='inline-block md:mx-auto md:translate-x-[192.5px] mb-[90px]  opacity-80 hover:opacity-100 hover:-translate-y-5 transition-all duration-300 hover:scale-105'
					>
						{' '}
						<Image
							className='w-full md:w-auto rounded-3xl'
							src={'/img/blog.png'}
							alt={'gallery'}
							width={600}
							height={400}
						/>
					</a>
				</div>
			</FadeIn>
			{/* <FadeIn>
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
			</FadeIn> */}
		</div>
	);
};

export default Gallery;
