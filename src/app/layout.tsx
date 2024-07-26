import type { Metadata } from 'next';
import './globals.css';
import { Source_Sans_3 } from 'next/font/google';

const sans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Shu lp',
	description: 'ShuのLPへようこそ！練習で制作したものを紹介しています。',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ja' className='scroll-smooth'>
			<body className={`${sans.className} bg-black text-white`}>
				<div>{children}</div>
			</body>
		</html>
	);
}
