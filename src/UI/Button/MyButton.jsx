import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, button, strong, href }) => {
	return (
		<a href={href}>
			<button style={button} className={classes.button}>
				<strong style={strong} className={classes.strong}>
					{children}
				</strong>
			</button>
		</a>
	);
};

export default MyButton;
