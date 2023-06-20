import React from 'react';
import HomeAdvertisement from './components/HomeAdvertisement';
import Cyberpunk2077Logo from 'D:/UsefulPrograms/landing-cyberpunk/src/assets/svg/Cyberpunk_2077_logo 1_homeLogo.svg';
import YouTube from 'D:/UsefulPrograms/landing-cyberpunk/src/assets/img/desktop/youtube logo_youTube.png';
import Vk from 'D:/UsefulPrograms/landing-cyberpunk/src/assets/img/desktop/vk logo_vk.png';
import Facebook from 'D:/UsefulPrograms/landing-cyberpunk/src/assets/img/desktop/facebook-rect logo_facebook.png';
import Twitter from 'D:/UsefulPrograms/landing-cyberpunk/src/assets/img/desktop/Vector_twitter.png';
import Twitch from 'D:/UsefulPrograms/landing-cyberpunk/src/assets/img/desktop/Vector_twitch.png';
import Instagram from 'D:/UsefulPrograms/landing-cyberpunk/src/assets/img/desktop/instagram-square logo_instagram.png';
import './style/Index.css';

const Index = () => {
	return (
		<div className='homePage'>
			<div className='homePage__nav'>
				<div className='homePage__nav_row'>
					<a href='#'>
						<img
							className='homePage__logo'
							src={Cyberpunk2077Logo}
							alt='Cyberpunk 2077 logo'
						/>
					</a>
					<div className='homePage__links'>
						<ul>
							<li>
								<a href='#'>
									<img src={YouTube} alt='YouTube' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={Vk} alt='Vk' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={Facebook} alt='Facebook' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={Twitter} alt='twitter' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={Twitch} alt='Twitch' />
								</a>
							</li>
							<li>
								<a href='#'>
									<img src={Instagram} alt='Instagram' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='homePage__button'>
				<div className='homePage__button_row'>
					<HomeAdvertisement />
				</div>
			</div>
		</div>
	);
};

export default Index;
