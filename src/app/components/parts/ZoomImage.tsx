import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

function MainVisual({ path }: { path: string }) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const mainVisualRef: any = useRef(null);
	const width = 100;

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (mainVisualRef.current) {
			const windowWidth = window.innerWidth;
			if (windowWidth > 768) {
				mainVisualRef.current.style.width = width + scrollPosition / 10 + '%';
			} else {
				mainVisualRef.current.style.width = width - scrollPosition / 10 + '%';
			}
		}
	}, [scrollPosition]);

	return (
		<div ref={mainVisualRef} className='main-visual'>
			<Image src={path} alt={'main'} width={480} height={600} className='w-full object-cover' />
		</div>
	);
}

export default MainVisual;
