import React from 'react';
import MyButton from '../../UI/Button/MyButton';
import windowWidth from '../../context/WindowWidth';
import HP from '../../assets/img/desktop/c06611743 1_Screen.svg';
import HPLogo from '../../assets/svg/hp-2 logo_hp.svg';
import Vector from '../../assets/svg/Group 235_vector.svg';
import CyberpunkLogo from '../../assets/svg/Cyberpunk_2077_logo 1_homeLogo.svg';
import Palette from '../../assets/svg/color_lens_palette.svg';
import Crystal from '../../assets/svg/auto_awesome_crystal.svg';
import Copy from '../../assets/svg/auto_awesome_motion_copy.svg';
import './styles/TogetherHP.css';

const TogetherHP = () => {
	const styleButton = {
		height: 59,
		width: 194,
		backgroundColor: 'black',
	};

	const styleButtonSmall = {
		height: 59,
		width: 184,
		backgroundColor: 'black',
	};
	return (
		<div className='togetherHP'>
			<div className='togetherHP__row'>
				<div className='togetherHP__img'>
					<img src={HP} alt='HP Screen' id='HPScreen' />
					<div className='togetherHP__collaboration'>
						<img src={HPLogo} alt='HP logo' id='HPLogo' />
						<img src={Vector} alt='Vector' id='Vector' />
						<img
							src={CyberpunkLogo}
							alt='Cyberpunk 2077 logo'
							id='CyberpunkLogo'
						/>
					</div>
				</div>
				<div className='togetherHP__main'>
					<div className='togetherHP__main_title'>
						Полное погружение вместе с HP
					</div>
					<div className='togetherHP__main_body'>
						Погрузись в современные экшен-игры с реалистичным изображением с
						помощью монитора с диагональю 23,8 дюйма, созданном для отображения
						максимально насыщенных цветов. Успевай реагировать на любые события
						с временем отклика 1 мс и частотой в 144 Гц!
					</div>
					<div className='togetherHP__main_listAdvantages'>
						<ul className='togetherHP__main_ul'>
							<li
								className='togetherHP__main_advantages'
								id='listAdvantagesColor'
							>
								<img
									src={Palette}
									alt='Palette'
									className='listAdvantagesImg'
								/>
								Яркие насыщенные цвета
							</li>
							<li
								className='togetherHP__main_advantages'
								id='listAdvantagesPicture'
							>
								<img
									src={Crystal}
									alt='Crystal'
									className='listAdvantagesImg'
								/>
								Кристальная четкость изображения
							</li>
							<li
								className='togetherHP__main_advantages'
								id='listAdvantagesSmoothness'
							>
								<img
									src={Copy}
									alt='Cope'
									className='listAdvantagesImg'
									id='listAdvantagesCopy'
								/>
								Быстрые движения и плавный геймплей
							</li>
						</ul>
					</div>
					<MyButton style={windowWidth <= 625 ? styleButtonSmall : styleButton}>
						<a
							href='https://www.dns-shop.ru/product/9582c622563d1b80/161-noutbuk-hp-pavilion-gaming-16-a0055ur-cernyj/?utm_referrer=https%3A%2F%2Fwww.google.com%2F'
							className='togetherHP__button_text'
						>
							Подробнее
						</a>
					</MyButton>
				</div>
			</div>
		</div>
	);
};

export default TogetherHP;
