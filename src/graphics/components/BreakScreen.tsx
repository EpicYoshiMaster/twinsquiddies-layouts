import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Background } from './Background';
import { YoutubeLogo, DiscordLogo, TwitterLogo, Butterfly  } from "@phosphor-icons/react";
import { useReplicant } from '@nodecg/react-hooks';
import { EventData, Socials, EventInfo } from 'schemas';
import { CarouselComponent } from './CarouselComponent';

interface BreakScreenProps {
	message: string;
}

export const BreakScreen: React.FC<BreakScreenProps> = ({ message }) => {
	const [eventData] = useReplicant<EventData>('eventData', { bundle: 'squidwest-layout-controls'});
	const [socials] = useReplicant<Socials>('socials', { bundle: 'squidwest-layout-controls'});

	const [currentEvent, setCurrentEvent] = useState<EventInfo>({ name: "Current Event Name", location: "Event Location", number: 1, date: "Today" });

	useEffect(() => {
		if(!eventData) return;
   
		setCurrentEvent(eventData.currentEvent);
	}, [eventData]);

	return (
		<StyledBreakScreen>
			<Background />
			<Content>
				<LogoArea>
					<CarouselWrapper>
						<CarouselComponent speed={15000} transitionSpeed={3000} indexRelative={1}>
							<CarouselItem>
								<Logo src="/bundles/twinsquiddies-layouts/images/SW_Logo.png" alt="SquidWest Logo" />
							</CarouselItem>
							<CarouselItem>
								<Logo src="/bundles/twinsquiddies-layouts/images/TwinSquiddiesLogo.png" alt="Twin Squiddies Logo" />
							</CarouselItem>
						</CarouselComponent>
					</CarouselWrapper>
				</LogoArea>
				<TextArea>
					<CarouselWrapper>
						<CarouselComponent speed={15000} transitionSpeed={3000} indexRelative={1}>
							<CarouselItem>
								<TitleText>SquidWest</TitleText>
								<SubtitleText>MidWest Splatoon Players</SubtitleText>
							</CarouselItem>
							<CarouselItem>
							<TitleText>{currentEvent.name} {currentEvent.number > 0 ? '#' + currentEvent.number  : ''}</TitleText>
								<SubtitleText>{message}</SubtitleText>
							</CarouselItem>
						</CarouselComponent>
					</CarouselWrapper>
					<SocialsRow>
						<SocialsItem>
							<YoutubeLogo />
							<SocialsText>{socials ? socials.youtube : ""}</SocialsText>
						</SocialsItem>
						<SocialsItem>
							<TwitterLogo />
							<SocialsText>{socials ? socials.twitter : ""}</SocialsText>
						</SocialsItem>
						<SocialsItem>
							<Butterfly />
							<SocialsText>{socials ? socials.bluesky : ""}</SocialsText>
						</SocialsItem>
						<SocialsItem>
							<DiscordLogo />
							<SocialsText>{socials ? socials.discord : ""}</SocialsText>
						</SocialsItem>
					</SocialsRow>
				</TextArea>
			</Content>
		</StyledBreakScreen>
	);
}

const StyledBreakScreen = styled.div`
	position: relative;
	width: 1920px;
	height: 1080px;
`;

const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const LogoArea = styled.div`
	position: relative;
	height: 785px;
	display: flex;
	justify-content: center;
`;

const TextArea = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	text-align: center;
`;

const CarouselWrapper = styled.div`
	position: relative;	
`;

const CarouselItem = styled.div`
	position: relative;
	height: 100%;
`;

const TitleText = styled.div`
	font-size: 8rem;
	color: var(--secondary);
	-webkit-text-stroke: 3px white;
`;

const SubtitleText = styled.div`
	font-size: 6rem;
	color: var(--secondary);
	-webkit-text-stroke: 2px white;
`;

const SocialsText = styled.div`
	-webkit-text-stroke: 2px white;
`;

const SocialsRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	font-size: 2.75rem;
	color: var(--alt-primary);
`;

const SocialsItem = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Logo = styled.img`
	height: 100%;
	object-fit: contain;	
`;