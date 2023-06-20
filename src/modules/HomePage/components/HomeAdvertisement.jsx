import React from 'react';
import MyButton from 'D:/UsefulPrograms/landing-cyberpunk/src/UI/Button/MyButton.jsx';
import '../style/HomeAdvertisement.css';

const HomeAdvertisement = ({ style }) => {
	return (
		<div className='advertisement' style={style}>
			<div className='advertisement__row'>
				<h1>Доступно на всех платформах</h1>
				<MyButton button={{ marginTop: 25 }}>Узнать больше</MyButton>
			</div>
		</div>
	);
};

export default HomeAdvertisement;
