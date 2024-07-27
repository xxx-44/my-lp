import React from 'react';

const Contact = () => {
	const generateMailtoLink = (user: string, domain: string) => {
		return `mailto:${user}@${domain}?subject=お問い合わせ`;
	};
	const mailUser = 'shu.web44';
	const mailDomain = 'gmail.com';
	const mailtoLink = generateMailtoLink(mailUser, mailDomain);

	return (
		<div className='text-center mt-[493px] pb-[200px] border-b'>
			<section>CONTACT</section>
			<div className='hover:opacity-70 mx-auto w-[400px] md:block hidden'>
				<a href={mailtoLink}>
					<button className='block mx-auto mt-14 w-[400px] h-[81px] font-extralight border border-gray-500 relative after:content-[""] after:absolute after:w-[122px] after:h-[1px] after:bg-white after:top-12 after:ml-7 before:content-[""] before:absolute before:w-[15px] before:h-[1px] before:rotate-[30deg] before:top-11 before:-right-12 before:bg-white hover:after:translate-x-3 after:transition after:duration-300 hover:before:translate-x-3 before:transition before:duration-300'>
						メールでのお問い合わせ
					</button>
				</a>
			</div>
			<div className='hover:opacity-70 mx-auto w-[400px] md:hidden block'>
				<a href={mailtoLink}>
					<button className='block mx-auto mt-14 w-[400px] h-[81px] font-extralight border border-gray-500 '>
						メールでのお問い合わせ
					</button>
				</a>
			</div>
			{/* <div className='hover:opacity-70 mx-auto w-[400px]'>
				<button className='block mx-auto mt-5 w-[400px] h-[81px] font-extralight border-gray-500 border relative after:content-[""] after:absolute after:w-[122px] after:h-[1px] after:bg-white after:top-12 after:ml-[43px] before:content-[""] before:absolute before:w-[15px] before:h-[1px] before:rotate-[30deg] before:top-11 before:-right-12 before:bg-white hover:after:translate-x-3 after:transition after:duration-300 hover:before:translate-x-3 before:transition before:duration-300'>
					その他のお問い合わせ
				</button>
			</div> */}
		</div>
	);
};

export default Contact;
