import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Background } from './Background';
import { YoutubeLogo, DiscordLogo, TwitterLogo, Butterfly  } from "@phosphor-icons/react";
import { useReplicant } from '@nodecg/react-hooks';
import { EventData, Socials, EventInfo } from 'schemas';
import { CarouselComponent } from './CarouselComponent';
import { OutlinedText } from './OutlinedText'

interface BreakScreenProps {
	message: string;
}

const TitleOutline = [ { width: "15px", color: "var(--break-title-outline)" } ];

const SubtitleOutline = [ { width: "15px", color: "var(--break-subtitle-outline)" } ];

const SocialTitleOutline = [ { width: "10px", color: "var(--break-socials-title-outline)"} ];

const SocialTextOutline = [ { width: "10px", color: "var(--break-socials-outline)"} ];

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
				<Rows>
					<EventSection>
						<TitleText>
							<OutlinedText 
							text={`${currentEvent.name} ${currentEvent.number > 0 ? '#' + currentEvent.number  : ''}`}
							outlines={TitleOutline}
							 />
						</TitleText>
						<SubtitleText>
							<OutlinedText 
							text={`${message}`}
							outlines={SubtitleOutline}
							 />
						</SubtitleText>
					</EventSection>
					<Columns>
						<SocialsColumn>
							<CarouselComponent speed={10000} transitionSpeed={2000}>
								<SocialsArea>
									<SocialsTitle>
										<OutlinedText text="Follow Twin Squiddies!" outlines={SocialTitleOutline} />
									</SocialsTitle>
									<SocialsItem>
										<Butterfly />
										<OutlinedText text="@twinsquiddies.bsky.social" outlines={SocialTextOutline} />
									</SocialsItem>
									<SocialsItem>
										<DiscordLogo />
										<OutlinedText text="discord.gg/LCL" outlines={SocialTextOutline} />
									</SocialsItem>
								</SocialsArea>
								<SocialsArea>
									<SocialsTitle>
										<OutlinedText text="Follow SquidWest!" outlines={SocialTitleOutline} />
									</SocialsTitle>
									<SocialsItem>
										<YoutubeLogo />
										<OutlinedText text={socials ? socials.youtube : ""} outlines={SocialTextOutline} />
									</SocialsItem>
									<SocialsItem>
										<TwitterLogo />
										<OutlinedText text={socials ? socials.twitter : ""} outlines={SocialTextOutline} />
									</SocialsItem>
									<SocialsItem>
										<Butterfly />
										<OutlinedText text={socials ? socials.bluesky : ""} outlines={SocialTextOutline} />
									</SocialsItem>
									<SocialsItem>
										<DiscordLogo />
										<OutlinedText text={socials ? socials.discord : ""} outlines={SocialTextOutline} />
									</SocialsItem>
								</SocialsArea>
							</CarouselComponent>
						</SocialsColumn>
						<SquidwestRow>
							<Logo src="/bundles/twinsquiddies-layouts/images/SW_Logo_Red_bg.png" alt="SquidWest Logo" />
						</SquidwestRow>
					</Columns>
				</Rows>
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
	width: 100%;
	height: 100%;
`;

const Columns = styled.div`
	position: relative;
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-columns: 1fr max-content;
`;

const Rows = styled.div`
	position: relative;
	display: grid;
	width: 100%;
	height: 100%;
	grid-template-rows: 1fr 1fr;	
`;

const SocialsColumn = styled.div`
	padding: 200px 0 0 20px;
	position: relative;
	display: flex;
	flex-direction: column;	
	justify-content: center;
	text-align: left;
	font-size: 2.75rem;
	font-weight: bold;
	color: var(--break-socials-text);

	& svg {
		margin-right: 10px;
		color: var(--break-socials-icons);
	}
`;

const SocialsTitle = styled.div`
	position: relative;
	margin-bottom: 10px;
	color: var(--break-socials-title);
`;

const EventSection = styled.div`
	padding-right: 20px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
`;

const SquidwestRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	padding: 380px 20px 20px 0;
	height: 540px;
`;

const TitleText = styled.div`
	font-size: 6rem;
	color: var(--break-title-text);
`;

const SubtitleText = styled.div`
	font-size: 5rem;
	color: var(--break-subtitle-text);
`;

const SocialsArea = styled.div`
	position: relative;
`;

const SocialsItem = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 5px 0;
`;

const Logo = styled.img`
	height: 140px;
	margin-right: 20px;
`;