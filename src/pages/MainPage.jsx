import React from 'react';
import BuyGame from '../modules/BuyGame/BuyGame.jsx';
import Footer from '../modules/Footer/Footer.jsx';
import HomePage from '../modules/HomePage/HomePage.jsx';
import Stock from '../modules/Stock/Stock.jsx';
import StoryGame from '../modules/StoryGame/StoryGame.jsx';
import Team from '../modules/Team/Team.jsx';
import TogetherHP from '../modules/TogetherHP/TogetherHP.jsx';

const MainPage = () => {
	return (
		<>
			<HomePage />
			<StoryGame />
			<Stock />
			<TogetherHP />
			<BuyGame />
			<Footer />
			<Team />
		</>
	);
};

export default MainPage;
