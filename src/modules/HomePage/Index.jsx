import React from 'react';
import HomeAdvertisement from './components/HomeAdvertisement';
import Cyberpunk2077Logo from '../../assets/svg/Cyberpunk_2077_logo 1_homeLogo.svg';
import YouTube from '../../assets/img/desktop/youtube logo_youTube.png';
import Vk from '../../assets/img/desktop/vk logo_vk.png';
import Facebook from '../../assets/img/desktop/facebook-rect logo_facebook.png';
import Twitter from '../../assets/img/desktop/Vector_twitter.png';
import Twitch from '../../assets/img/desktop/Vector_twitch.png';
import Instagram from '../../assets/img/desktop/instagram-square logo_instagram.png';
import './style/Index.css';

const Index = () => {
	return (
		<div className='homePage'>
			<div className='homePage__nav'>
				<div className='homePage__nav_row'>
					<a href='https://www.cyberpunk.net/us/en/'>
						<img
							className='homePage__logo'
							src={Cyberpunk2077Logo}
							alt='Cyberpunk 2077 logo'
						/>
					</a>
					<div className='homePage__links'>
						<ul>
							<li>
								<a href='https://www.youtube.com/@CyberpunkGame'>
									<img src={YouTube} alt='YouTube' />
								</a>
							</li>
							<li>
								<a href='https://vk.com/cyberpunkgame'>
									<img src={Vk} alt='Vk' />
								</a>
							</li>
							<li>
								<a href='https://www.facebook.com/CDPROJEKTRED/'>
									<img src={Facebook} alt='Facebook' />
								</a>
							</li>
							<li>
								<a href='https://twitter.com/CyberpunkGame'>
									<img src={Twitter} alt='twitter' />
								</a>
							</li>
							<li>
								<a href='https://www.twitch.tv/directory/game/Cyberpunk%202077'>
									<img src={Twitch} alt='Twitch' />
								</a>
							</li>
							<li>
								<a href='https://www.instagram.com/cyberpunkgame/'>
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
