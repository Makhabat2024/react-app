import React from 'react';
import scss from '../pages/Style.module.scss';
import Input from '../ui/inputs/Input';
import ButtonBG from '../ui/buttons/ButtonBG';

const HyrdaForm = () => {
	return (
		<div className={scss.hyrdaForm}>
			<div className={scss.title}>
				<h1>JOIN HYDRA</h1>
				<p className={scss.line_row}></p>

				<p>Let’s Build Your VR Experience</p>
			</div>

			<Input />
			<ButtonBG>SEND TO HYDRA</ButtonBG>
		</div>
	);
};

export default HyrdaForm;
