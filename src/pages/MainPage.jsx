import React from 'react';
import HomePage from '../modules/HomePage/HomePage.jsx';
import Stock from '../modules/Stock/Stock.jsx';
import StoryGame from '../modules/StoryGame/StoryGame.jsx';

const MainPage = () => {
	return (
		<>
			<HomePage />
			<StoryGame />
			<Stock />
		</>
	);
};

export default MainPage;
