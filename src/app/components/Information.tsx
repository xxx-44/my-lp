import React from 'react';
import FadeIn from './parts/FadeIn';

const Information = () => {
	return (
		<div className=' text-center mb-[154px]'>
			<FadeIn>
				<h1 className='font-light font-black text-[100px] text-center tracking-[3px] h-screen flex justify-center items-center leading-[125px] mb-[120px]'>
					Hello Flower! <br /> FA EXHIBITION 2021
				</h1>
			</FadeIn>
			<FadeIn>
				<section>INFORMATION</section>
				<p className='mt-11 text-2xl font-light h-6 mb-[5px]'>2021 JUL 1(THU)-3(SAT)</p>
				<p className='text-lg font-light h-[18px] mb-[30px]'>DAY1 10am-6pm OTHER 10am-5:30pm</p>
				<h3 className='text-[40px] tracking-wide font-semibold h-[40px] mb-[25px]'>at PARK SIDE HALL</h3>
				<p className='text-[18px] font-light h-[44px] leading-6'>
					2021年7月1日(木)ー3日(土)
					<br />
					Day1 10時〜18時　その他 10時〜17時30分
				</p>
			</FadeIn>
		</div>
	);
};

export default Information;
