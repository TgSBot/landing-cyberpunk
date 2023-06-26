import React from 'react';
import classes from './MyInput.module.css';

const MyInput = ({ type, placeholder, innerRef, ...props }) => {
	return (
		<>
			{type === 'checkbox' ? (
				<label className={classes.label_inputCheckbox}>
					<input
						type='checkbox'
						className={classes.input_checkbox}
						ref={innerRef}
						{...props}
					/>
					<span className={classes.fake}></span>
					<span className={classes.input_checkbox_text}>
						Согласен на обработку персональных данных
					</span>
				</label>
			) : (
				<input
					type='text'
					ref={innerRef}
					className={classes.input_text}
					placeholder={placeholder}
					{...props}
				/>
			)}
		</>
	);
};

export default MyInput;
