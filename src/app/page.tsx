'use client';

import Information from './components/Information';
import Gallery from './components/Gallery';
import Access from './components/Access';
import Contact from './components/Contact';
import Foorter from './components/Foorter';
import Main from './Main';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
	const [isElementInView, setIsElementInView] = useState(false);
	const elementRef = useRef(null);
	const elementRef2 = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				setIsElementInView(entry.isIntersecting);
			},
			{ threshold: 0.1 } // 要素が画面の50%以上表示されたら isIntersecting が true になる
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				observer.disconnect();
			}
		};
	}, []);

	return (
		<div className={`${isElementInView && 'bg-[url(/img/bg.jpg)] bg-cover bg-fixed'}`}>
			<Main />
			<Information />
			<Gallery />
			<div className=' ' ref={elementRef}>
				<Access />
			</div>
			<div>
				<Contact />
			</div>

			<Foorter />
		</div>
	);
}
