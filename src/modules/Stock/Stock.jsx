import React from 'react';
import Form from './components/Form';
import './styles/Stock.css';
import windowWidth from '../../context/WindowWidth';
import consoles from '../../assets/img/desktop/Group 217_xBox=Ps.png';
import stock from '../../assets/svg/Group 215_stock.svg';
import consolesTablet from '../../assets/img/tablet/Group 244_xBxo=PS.png';

const Stock = () => {
	return (
		<>
			<div className='above-decoration'></div>
			<div className='stock'>
				<div className='stock__row'>
					{windowWidth <= 966 ? (
						<div className='stock__title'>
							<img src={stock} id='stock' alt='Stock' />
							<img
								src={consoles}
								id='console'
								alt='Xbox Series X and PlayStation 5'
							/>
							<h3 className='stock__title_text'>Играй и выигрывай!</h3>
						</div>
					) : (
						<div className='stock__title'>
							<img src={stock} alt='Stock' />
							<h3 className='stock__title_text'>Играй и выигрывай!</h3>
						</div>
					)}
					<div className='stock__body'>
						Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть
						консоль <span>Xbox Series X</span> или{' '}
						<span>Sony PlayStation 5!</span> Заполни форму ниже и приложи
						скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля.
						Удачи! ;)
					</div>
					<div className='stock__feedback'>
						<Form />
						{windowWidth <= 966 ? (
							''
						) : (windowWidth <= 1366) & (windowWidth >= 1025) ? (
							<img src={consolesTablet} alt='Xbox Series X and PlayStation 5' />
						) : (
							<img src={consoles} alt='Xbox Series X and PlayStation 5' />
						)}
					</div>
				</div>
			</div>
			<div className='bottom-decoration'></div>
		</>
	);
};

export default Stock;
