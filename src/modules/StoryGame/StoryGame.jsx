import React from 'react';
import tokyoNightCity from '../../assets/img/desktop/Rectangle 597_body_1.jpg';
import girlAndMotocycle from '../../assets/img/desktop/Rectangle 598_body_2.jpg';
import nightNightCity from '../../assets/img/desktop/Rectangle 599_body_3.jpg';
import nightNightCityMobile from '../../assets/img/mobyle/Rectangle 61_body_3.jpg';
import './style/StoryGame.css';

const StoryGame = () => {
	const windowInnerWidth = window.innerWidth;

	return (
		<div className='storyGame'>
			<div className='storyGame__row'>
				<div className='storyGame__main'>
					<div className='storyGame__title'>
						Найт-Сити изменит тебя навсегда!
					</div>
					<div className='storyGame__body'>
						<span>Cyberpunk 2077</span> — приключенческая ролевая игра, действие
						которой происходит в мегаполисе Найт-Сити, где власть, роскошь и
						модификации тела ценятся выше всего. Ты играешь за V, наёмника в
						поисках устройства, позволяющего обрести бессмертие. Ты сможешь
						менять киберимпланты, навыки и стиль игры своего персонажа, исследуя
						открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя
						окружает.
					</div>
				</div>
				<div className='storyGame__img'>
					<div className='storyGame__img_block_1'>
						<img src={tokyoNightCity} alt='Улицы Найт-Сити в Японском стиле' />
						<img
							src={girlAndMotocycle}
							alt='Девушка сидящая на мотоцикле, смотрит на голограчискую вывеску'
						/>
					</div>
					<div className='storyGame__img_block_2'>
						<img
							src={
								windowInnerWidth <= 490 ? nightNightCityMobile : nightNightCity
							}
							alt='Отдалённое фота Найт-Сити в ночное время'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StoryGame;
