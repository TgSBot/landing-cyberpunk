import React from 'react';
import windowWidth from '../../context/WindowWidth';
import CyberpunkLogo from '../../assets/svg/Cyberpunk_2077_logo 1_homeLogo.svg';
import CDProjektRed from '../../assets/svg/CD_Projekt_logo 1_cdProjektRed.svg';
import './style/Footer.css';

const Footer = () => {
	return (
		<>
			{windowWidth >= 990 ? (
				<footer className='footer'>
					<div className='footer__row'>
						<div className='footer__row_logo'>
							<img src={CyberpunkLogo} alt='Cyberpunk2077' id='Cyberpunk' />
							<img src={CDProjektRed} alt='CD Projekt Red ' id='CDProjektRed' />
						</div>
						<div className='footer__row_regulation'>
							<h4 className='footer__row_regulation_h4'>
								<a href='https://regulations.cdprojektred.com/en/user_agreement'>
									Лицензия
								</a>
							</h4>
							<h4>
								<a href='https://regulations.cdprojektred.com/en/privacy_policy'>
									Политика конфиденциальности
								</a>
							</h4>
						</div>
					</div>
				</footer>
			) : (
				<>
					<div className='footer_logo'>
						<div className='footer__row__logo'>
							<div className='footer__row_logo_logo'>
								<img src={CyberpunkLogo} alt='Cyberpunk2077' id='Cyberpunk' />
								<img
									src={CDProjektRed}
									alt='CD Projekt Red '
									id='CDProjektRed'
								/>
							</div>
						</div>
					</div>
					<div className='footer_text'>
						<div className='footer__row_regulation'>
							<div className='footer__regulation_text'>
								<h4 className='footer__row_regulation_h4'>
									<a href='https://regulations.cdprojektred.com/en/user_agreement'>
										Лицензия
									</a>
								</h4>
								<h4>
									<a href='https://regulations.cdprojektred.com/en/privacy_policy'>
										Политика конфиденциальности
									</a>
								</h4>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Footer;
