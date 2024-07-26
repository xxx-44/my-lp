import React from 'react';
import FadeIn from './parts/FadeIn';
import Image from 'next/image';

const Information = () => {
	return (
		<div className=' text-center mb-[154px]'>
			<FadeIn>
				<div className='relative'>
					<h1 className=' animate-tracking-in-contract-bck font-black text-[70px] md:text-[100px] text-left md:text-center tracking-[3px] h-screen flex justify-center items-center leading-[125px] mb-[120px]'>
						WELCOME TO THE MY PORTFOLIO
						<br /> I MADE FOR YOU !!
					</h1>
					<Image
						src={'/img/spzai1.png'}
						width={159}
						height={138}
						alt='sozai'
						className='absolute left-[5%] top-[5%] animate-heartbeat invisible lg:visible'
					/>
					<Image
						src={'/img/spzai2.png'}
						width={123}
						height={143}
						alt='sozai'
						className='absolute left-[85%] top-[75%] invisible lg:visible animate-heartbeat'
					/>
				</div>
			</FadeIn>
			<FadeIn>
				<div id='about'>
					<section>ABOUT ME</section>
					<p className='mt-11 text-2xl font-light h-6 mb-[5px]'>NAME: Shu</p>
					<p className='text-lg font-light h-[18px] mb-[30px]'>フロントエンドエンジニアを目指してます！</p>
					<h3 className='text-[40px] tracking-wide font-semibold h-[40px] inline-block'>
						SKILL: <br />
						HTML5 / CSS3 [ Tailwind ] / JS [ React , Nextjs ]<br />
						Adobe [ Illustrator , Photoshop ] / Figma
					</h3>
					<p className='text-[18px] mt-[32px] font-light h-[44px] leading-6'>
						2022年からプログラミングの勉強をはじめ
						<br />
						2023年からWEB制作の専門学校に通ってます。
					</p>
				</div>
			</FadeIn>
		</div>
	);
};

export default Information;
