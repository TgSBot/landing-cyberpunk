import React from 'react';
import MyButton from '../../../UI/Button/MyButton.jsx';
import '../style/HomeAdvertisement.css';

const HomeAdvertisement = ({ style }) => {
	return (
		<div className='advertisement' style={style}>
			<div className='advertisement__row'>
				<h1>Доступно на всех платформах</h1>
				<MyButton
					href={'https://www.cyberpunk.net/us/en/cyberpunk-2077'}
					style={{ marginTop: 25 }}
				>
					Узнать больше
				</MyButton>
			</div>
		</div>
	);
};

export default HomeAdvertisement;
