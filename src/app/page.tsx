'use client';

import Information from './components/Information';
import Gallery from './components/Gallery';
import Access from './components/Access';
import Contact from './components/Contact';
import Foorter from './components/Foorter';
import Main from './Main';
import { useEffect, useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

export default function Home() {
	const [isElementInView, setIsElementInView] = useState(false);
	const [isElementInView2, setIsElementInView2] = useState(false);
	const [isElementInView3, setIsElementInView3] = useState(false);
	const [bgState, setBgState] = useState(false);
	const [sideState, setSideState] = useState(false);
	const [headState, setHeadState] = useState(false);
	const elementRef = useRef(null);
	const elementRef2 = useRef(null);
	const elementRef3 = useRef(null);

	useEffect(() => {
		if (isElementInView) {
			setBgState(true);
		}
	}, [isElementInView]);

	useEffect(() => {
		if (isElementInView2) {
			setHeadState(true);
			setSideState(true);
		}
	}, [isElementInView2]);

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
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				setIsElementInView3(!entry.isIntersecting);
				console.log(!entry.isIntersecting);
			},
			{ threshold: 0.1 } // 要素が画面の50%以上表示されたら isIntersecting が true になる
		);

		if (elementRef3.current) {
			observer.observe(elementRef3.current);
		}

		return () => {
			if (elementRef3.current) {
				observer.disconnect();
			}
		};
	}, []);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const [entry] = entries;
				setIsElementInView2(entry.isIntersecting);
			},
			{ threshold: 0.1 } // 要素が画面の50%以上表示されたら isIntersecting が true になる
		);

		if (elementRef2.current) {
			observer.observe(elementRef2.current);
		}

		return () => {
			if (elementRef2.current) {
				observer.disconnect();
			}
		};
	}, []);

	return (
		<div>
			<div
				className={`w-full h-[64px] z-10 fixed top-0 left-0 ${
					isElementInView3 ? 'animate-fade-in-down' : 'animate-fade-out-down'
				}`}
			>
				{headState && <Header />}
			</div>

			<div ref={elementRef3}>
				<Main />
				<Information />
			</div>

			<div
				className={`hidden md:block fixed right-0 top-[44%]  ${
					isElementInView2 ? 'animate-pop-in' : 'animate-pop-out'
				}`}
			>
				{sideState && <Sidebar />}
			</div>
			<div className={`${isElementInView ? 'animate-fade-out' : 'animate-fade-in'}`} ref={elementRef2}>
				<Gallery />
			</div>

			<div ref={elementRef}>
				<div
					className={`${
						bgState && 'bg-[url(/img/bg.jpg)] bg-cover bg-fixed fixed top-0 left-0 w-full h-screen -z-10'
					} ${isElementInView ? 'animate-fade-in-bg' : 'animate-fade-out'}`}
				></div>
				<Access />
			</div>
			<div>
				<Contact />
			</div>

			<Foorter />
		</div>
	);
}
