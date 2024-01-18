import React from 'react';
import scss from '../Style.module.scss';
import { data } from '../../../data/whyBuildData';
import ButtonBG from '../../ui/buttons/ButtonBG';

const WhyBuild = () => {
	return (
		<section className={scss.why_build}>
			<div className={scss.cards}>
				{data.map((item, index) => (
					<div key={index} className={scss.card}>
						<img src={item.img} alt={item.title} />
						<h1>{item.title}</h1>
						<p>{item.text}</p>
						<ButtonBG>TRY IT NOW</ButtonBG>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhyBuild;
