import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, disabled, ...props }) => {
	return (
		<button
			className={[classes.button, classes.strong].join(' ')}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};

export default MyButton;
