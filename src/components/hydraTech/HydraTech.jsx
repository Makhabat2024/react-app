import React from 'react';
import scss from '../pages/Style.module.scss';
import hydratech1 from '../../assets/images/hydra-tech-1.png';
import hydratech2 from '../../assets/images/hydra-tech-2.png';
import hydratech3 from '../../assets/images/hydra-tech-3.png';
import hydratech4 from '../../assets/images/hydra-tech-4.png';

const imgArray = [
	{
		hydratech1,
		hydratech2,
		hydratech3,
		hydratech4
	}
];
const HydraTech = () => {
	return (
		<div>
			{imgArray.map(({ hydratech1, hydratech2, hydratech3, hydratech4 }) => (
				<div className={scss.hydraTech}>
					<img src={hydratech1} alt="hydra-tech" />
					<img src={hydratech2} alt="hydra-tech" />
					<img src={hydratech3} alt="hydra-tech" />
					<img src={hydratech4} alt="hydra-tech" />
				</div>
			))}
		</div>
	);
};

export default HydraTech;
