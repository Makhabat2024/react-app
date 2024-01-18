import React from 'react';
import scss from './Input.module.scss';
const Input = () => {
	return (
		<form className={scss.form}>
			<div className={scss.line1}>
				<input type="text" name="name" placeholder="First Name" />
				<input type="text" name="name" placeholder='Last Name'/>
			</div>

			<div className={scss.line2}>
				<input type="text" name="name" placeholder="Email" />
				<input type="text" name="name" placeholder="Phone Number" />
			</div>

			<div className={scss.line3}>
				<input type="text" name="name" placeholder="Subject" />
			</div>

			<div className={scss.line4}>
				<textarea
					id="w3review"
					name="w3review"
					rows="4"
					cols="50"
					placeholder="Tell Us Something..."
				></textarea>
			</div>
		</form>
	);
};

export default Input;
