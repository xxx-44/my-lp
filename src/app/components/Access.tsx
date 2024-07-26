const Access = () => {
	return (
		<div className=' text-center'>
			<div className='backdrop-blur-[24px] inline-block px-10 py-16'>
				<section>COMMENT</section>
				<h3 className='mt-16 text-3xl mb-6'>届いた先にいるあなたの心を動かしたい</h3>
				<p className='font-light'>
					ただ作るだけのWEB制作ではなく、そのサイトやアプリを通してクライアント様が達成したい目標を意識した制作を心がけています。
					<br />
					自分が制作したものにふれてくださった方々の心を動かせるクリエイターを目指しています！
				</p>
				<p className='mt-6 font-light'>
					このポートフォリオは、
					<span>
						<a href='https://code-jump.com/' className='text-blue-300'>
							codejump
						</a>
					</span>
					さんの練習用サイトをもとにフラットデザインを意識してnextjs×Tailwindで作りました。
					<br />
					ご連絡は↓のコンタクトからお気軽にお問い合わせください。
				</p>
				{/* <button className='mt-8 w-[270px] h-[51px] border font-light'>GOOGLE MAP</button> */}
			</div>
		</div>
	);
};

export default Access;
