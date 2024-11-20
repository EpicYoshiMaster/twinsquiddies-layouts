import React, { useState } from 'react'
import styled from 'styled-components';

interface BackgroundProps
{
	backgroundColor?: string;
}

const BACKGROUND_PATH = '/bundles/twinsquiddies-layouts/images/backgrounds';

//Weights should add up to 1
type Category = { weight: number, backgrounds: Background[] };
type Background = { image: string, size?: string }

const BACKGROUND_CATS: Category[] = [
	{
		weight: 1.0,
		backgrounds: [
			{ image: 'bg_cherrysquid.png', size: '10%' }
		]
	}
]

const GetRandomBackground = (): Background => {
	let random = Math.random();
	let category = 0;

	BACKGROUND_CATS.forEach(((item, index) => {
		if(random <= 0) return;
		random = random - item.weight;

		if(random <= 0) {
			category = index;
		}
	}))

	return BACKGROUND_CATS[category].backgrounds[Math.floor(Math.random() * (BACKGROUND_CATS[category].backgrounds.length))];
}

export const Background: React.FC<BackgroundProps> = () => {
	const [randomBackground] = useState<Background>(GetRandomBackground())

	return (
		<StyledBackground 
		src={`${BACKGROUND_PATH}/${randomBackground.image}`}
		$size={randomBackground.size}/>
	);
}

const StyledBackground = styled.div<{src: string, $size?: string}>`
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 0px;

	background-size: ${({ $size }) => $size ? $size : '10%'};
	background-repeat: repeat;
	background-image: url(${props => props.src});
	background-color: var(--contrast);
	background-attachment: scroll;
	
    animation: scrolling 90s linear infinite;

	@keyframes scrolling {
  	from{
      	background-position: 1920px 1920px;
  	}
  	to{
      	background-position: 0 0;
  	}
	}
`;