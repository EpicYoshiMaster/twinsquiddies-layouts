import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { CarouselComponent } from './CarouselComponent';
import { EventData, EventInfo } from 'schemas/eventData';
import { Socials } from 'schemas/socials';
import { useReplicant } from '@nodecg/react-hooks';
import { IntermissionData } from 'schemas/intermissionData';
import { formatDateHM, formatDateMDY, getSocialPlatformIcon } from '../../helpers/utils';

export const Omnibar: React.FC = () => {
	const [eventData, setEventData] = useReplicant<EventData>('eventData', { bundle: 'squidwest-layout-controls'});
	const [socials] = useReplicant<Socials>('socials', { bundle: 'squidwest-layout-controls'});
	const [intermissionData] = useReplicant<IntermissionData>('intermission', { bundle: 'squidwest-layout-controls'});

	const [currentEvent, setCurrentEvent] = useState<EventInfo>({ name: "Current Event Name", location: "Event Location", number: 1, date: "Today" });

	useEffect(() => {
		if(!eventData) return;
   
		setCurrentEvent(eventData.currentEvent);
	}, [eventData]);

    const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => { 
			setTime(new Date());
		}, 1000);

		return () => {
			clearInterval(interval);
		}
	}, []);

	const memoTime = useMemo(() => { return time; }, [time]);

    return (
        <OmnibarWrapper>
			<OmnibarItem $show={intermissionData ? intermissionData.showTime : true}>
				<TimeDate $border={true}>
					<TimeDisplay>
						{formatDateHM(memoTime)}
					</TimeDisplay>
					<DateDisplay>
						{formatDateMDY(memoTime)}
					</DateDisplay>
				</TimeDate>
			</OmnibarItem>
			<OmnibarItem $show={intermissionData ? intermissionData.showEvent : true}>
				<EventSection $border={true}>
					<Logo src='/bundles/twinsquiddies-layouts/images/TwinSquiddiesFlatTransparent.png' alt="Twin Squiddies Logo" />
					{currentEvent.number > 0 && (
					<EventNumberText>
            	    	#{currentEvent.number}
            		</EventNumberText>)}
				</EventSection>
			</OmnibarItem>
			<TextOmnibarItem $show={intermissionData ? intermissionData.showLocation : true} $maxWidth="24rem">
				{currentEvent.location !== '' && (
				<LocationWrapper $border={true}>
					<LocationText>
            	    	{currentEvent.location}
            		</LocationText>
				</LocationWrapper>
				)}
			</TextOmnibarItem>
			<TextOmnibarItem $show={intermissionData ? intermissionData.showFlavorText : true} $maxWidth="20rem">
				<TourneyWrapper $border={true}>
					<TourneyPlaceholder>
						{intermissionData ? intermissionData.flavorText : ""}
					</TourneyPlaceholder>
				</TourneyWrapper>
			</TextOmnibarItem>
            <CarouselWrapper $border={true}>
				<CarouselComponent speed={7000} transitionSpeed={1000}>
					{socials && socials.flatMap((group, groupIndex) => {

						return [(<CarouselRow key={groupIndex}><LogoText>{`Follow ${group.name}!`}</LogoText></CarouselRow>),
							group.items.map((entry, entryIndex) => (
								<CarouselRow key={`${groupIndex} ${entryIndex}`}>
									{getSocialPlatformIcon(entry.platform)}
									<LogoText>{entry.social}</LogoText>
								</CarouselRow>
							))
						]
					})}
				</CarouselComponent>
			</CarouselWrapper>
            <OmnibarElement as="img" src='/bundles/twinsquiddies-layouts/images/SW_Logo_Red_bg.png' alt="SquidWest Logo" />
		</OmnibarWrapper>
    );
}

const OmnibarWrapper = styled.div`
	position: relative;
  	display: flex;
  	flex-direction: row;
  	width: calc(100% - 40px);
  	background-color: var(--omnibar-color);
	height: 122px;
	border: 8px solid var(--omnibar-border);
	border-radius: 0.5rem;
  	margin: 10px 20px;
`;

const OmnibarItem = styled.div<{ $show: boolean }>`
	position: relative;
	display: ${({ $show }) => $show ? 'block' : 'none'};
`;

const TextOmnibarItem = styled(OmnibarItem)<{ $maxWidth: string }>`
	max-width: ${({$maxWidth}) => $maxWidth};
`;

const OmnibarElement = styled.div<{$border?: boolean}>`
	position: relative;
	padding: 10px;
	color: var(--omnibar-text);
	font-size: 20pt;
	border-right: ${props => props.$border ? '5px solid var(--omnibar-divider)' : ''};
`;

const TimeDate = styled(OmnibarElement)`
	position: relative;
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const TimeDisplay = styled.div`
	position: relative;
	margin: auto;
	font-size: 35pt;
`;

const DateDisplay = styled.div`
	position: relative;
	margin: auto;
	font-size: 20pt;
`;

const EventSection = styled(OmnibarElement)`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
`;

const EventNumberText = styled.div`
	margin: 8px;
	font-size: 30pt;
`;

const Logo = styled.img`
    height: 7rem;
    object-fit: contain;
`;

const LocationWrapper = styled(OmnibarElement)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
`;

const LocationText = styled.div`
	margin: auto 8px;
	font-size: 25pt;
`;

const TourneyWrapper = styled(OmnibarElement)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

const TourneyPlaceholder = styled.div`
	font-size: 25pt;
`

const CarouselWrapper = styled(OmnibarElement)`
	position: relative;
	height: 100%;
	flex-grow: 1;
`;

const CarouselRow = styled.div`
	position: relative;
    display: flex;
    flex-direction: row;
	align-items: center;
    justify-content: center;
    max-height: 100%;
    height: 100%;
	font-size: 40pt;

	svg {
		width: 1em;
    	object-fit: contain;
		margin-right: 10px;
	}
`;

const LogoText = styled.div`
	font-size: 35pt;
`;