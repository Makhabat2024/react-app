import React from 'react';
import scss from '../pages/Style.module.scss';
import arrowRight from '../../assets/icons/arrow-right.svg';

import arrow from '../../assets/icons/arrow-small-right.svg';
const EllipseContent = () => {
	const data = [
		{
			number: '01',
			img: arrow,
			text1: '3D Conception',
			text2: '& Design'
		},
		{
			number: '02',
			img: arrow,
			text1: 'Interaction',
			text2: 'Design'
		},
		{
			number: '03',
			img: arrow,
			text1: 'VR World',
			text2: 'User Testing'
		},
		{
			number: '04',
			img: arrow,
			text1: 'Hydra VR',
			text2: ' Deploy'
		}
	];
	return (
		<div className={scss.ellipseCard}>
			{data.map(({ number, img, text1, text2 }) => (
				<div>
					<div className={scss.ellipse}>
						<h1>{number}</h1>
					</div>

					<div className={scss.text_box}>
						<img src={img} alt="arrow" />

						<div className={scss.texts}>
							<p>{text1}</p>
							<p>{text2}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default EllipseContent;
