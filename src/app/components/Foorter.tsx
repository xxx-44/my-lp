import React from 'react';

const Foorter = () => {
	return (
		<div className='font-light text-xs mx-[30px] my-20'>
			<p className='mb-[2px]'>FA EXHIBITION</p>
			<p className='mb-[4px]'>〒152-0035 東京都目黒区自由が丘1-1-1 PARK SIDE HALL</p>
			<p className='mb-8'>
				Tel: 03-1111-1111
				<br />
				E-mail: info@xxxxxxx.jp
			</p>
			<div className='flex justify-between'>
				<div className='flex'>
					<a className='mr-4' href=''>
						Twitter
					</a>
					<a className='mr-4' href=''>
						Facebook
					</a>
					<a href=''>Instagram</a>
				</div>
				<div className='flex'>
					<p className='mr-7'>PRIVACY POLICY</p>
					<p>&copy; FA EXHIBITION</p>
				</div>
			</div>
		</div>
	);
};

export default Foorter;
