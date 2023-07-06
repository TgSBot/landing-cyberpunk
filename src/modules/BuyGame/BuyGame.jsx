import React from 'react';
import windowWidth from '../../context/WindowWidth';
import diskEdition from '../../assets/img/desktop/Untitled-1 1_byGame.jpg';
import diskEditionTablet from '../../assets/img/tablet/Untitled-1 1_byGames.jpg';
import PC from '../../assets/svg/Frame 13_pc.svg';
import Stadia from '../../assets/svg/stadia logo_stadia.svg';
import xboxOne from '../../assets/svg/xbox-one-3 logo_xboxOne.svg';
import PS4 from '../../assets/svg/Group_ps4.svg';
import './style/BuyGame.css';

const BuyGame = () => {
	return (
		<div className='buyGame'>
			<div className='buyGame__row'>
				{windowWidth <= 990 ? (
					<img
						src={diskEdition}
						alt='Множество версий дисков'
						className='buyGame__row_img'
					/>
				) : windowWidth <= 1330 ? (
					<img
						src={diskEditionTablet}
						alt='Множество версий дисков'
						className='buyGame__row_img'
					/>
				) : (
					<img
						src={diskEdition}
						alt='Множество версий дисков'
						className='buyGame__row_img'
					/>
				)}

				<div className='buyGame__main'>
					<div className='buyGame__main_row'>
						<div className='buyGame__main_title'>
							Купить игру Cyberpunk 2077
						</div>
						<div className='buyGame__main_includedPackage'>
							<h3>В комплект входит:</h3>
							<ul className='buyGame__main_includedPackage_ul'>
								<li className='buyGame__main_includedPackage_li' id='Case'>
									Футляр с игровыми дисками
								</li>
								<li className='buyGame__main_includedPackage_li' id='PCVersion'>
									Футляр с кодом для загрузки игры и дисками(pc)
								</li>
								<li className='buyGame__main_includedPackage_li' id='Guide'>
									Справочник с информацией об игровом мире
								</li>
							</ul>
						</div>
						<div className='buyGame__main_platform'>
							<h3>Выберите платформу:</h3>
							<div className='buyGame__main_platform_placesPlay'>
								<div className='buyGame__main_platform_ul_1'>
									<ul className='buyGame__main_platform_ul'>
										<li className='buyGame__main_platform_li'>
											<img
												src={PC}
												alt='Personal computer'
												className='buyGame__main_platform_li_img'
												id='PC'
											/>
										</li>
										<li className='buyGame__main_platform_li'>
											<img
												src={Stadia}
												alt='Stadia'
												className='buyGame__main_platform_li_img'
												id='Stadia'
											/>
										</li>
									</ul>
								</div>
								<div className='buyGame__main_platform_ul_2'>
									<ul className='buyGame__main_platform_ul'>
										<li className='buyGame__main_platform_li'>
											<img
												src={xboxOne}
												alt='Xbox One'
												className='buyGame__main_platform_li_img'
												id='Xbox'
											/>
										</li>
										<li className='buyGame__main_platform_li'>
											<img
												src={PS4}
												alt='PS4'
												className='buyGame__main_platform_li_img'
												id='PS4'
											/>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuyGame;
