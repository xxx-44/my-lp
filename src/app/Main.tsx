import Image from 'next/image';
import React from 'react';
import ZoomImage from './components/parts/ZoomImage';

const Main = () => {
	return (
		<div>
			<div className=' grid grid-cols-3 overflow-hidden mb-[121px]'>
				<div className=''>
					<ZoomImage path={'/img/mainvisual1.jpg'} />
				</div>
				<div className=''>
					<ZoomImage path={'/img/mainvisual2.jpg'} />
				</div>

				<div className=''>
					<ZoomImage path={'/img/mainvisual3.jpg'} />
				</div>
			</div>
		</div>
	);
};

export default Main;
