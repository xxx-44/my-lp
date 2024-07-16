'use client';

import React, { useEffect, useRef, useState } from 'react';

const FadeIn = ({ children }: { children: React.ReactNode }) => {
	const containerRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.5 } // 画面の50%以上表示されたらアニメーションを開始
		);
		if (containerRef.current) {
			observer.observe(containerRef.current);
		}
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={containerRef} className='animated-container'>
			<div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>{children}</div>
		</div>
	);
};

export default FadeIn;
