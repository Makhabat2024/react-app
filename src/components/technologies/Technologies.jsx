import React from 'react';
import scss from '../../components/pages/Style.module.scss';
import chevronSmallDown from '../../assets/icons/chevron-small-down.svg';
const Technologies = () => {
	return (
		<div className={scss.technologies}>
			<h1>TECHNOLOGIES & HARDWARE</h1>
			<p>USED BY HYDRA VR.</p>
			<div className={scss.chevronSmallDown}>
				<img src={chevronSmallDown} alt="chevronSmallDown" />
			</div>
		</div>
	);
};

export default Technologies;
