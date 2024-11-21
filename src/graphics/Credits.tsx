import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components'
import { CarouselComponent } from './components/CarouselComponent';
import { GithubLogo, DiscordLogo, TwitterLogo, Butterfly } from "@phosphor-icons/react";
import { createRoot } from 'react-dom/client';
import { useReplicant } from '@nodecg/react-hooks';
import { EventData, CreditsData, EventInfo } from 'schemas';
import { CreditsNameRow } from './components/CreditsNameRow';

export function Credits() {
    const [eventData, setEventData] = useReplicant<EventData>('eventData', { bundle: 'squidwest-layout-controls'});

    const [currentEvent, setCurrentEvent] = useState<EventInfo>({ name: "Current Event Name", location: "Event Location", number: 1, date: "Today" });
	const [nextEvent, setNextEvent] = useState<EventInfo>({ name: "Next Event Name", location: "Next Event Location", number: 2, date: "January 1, 2024" });

    const [creditsData, setCreditsData] = useReplicant<CreditsData>('creditsData', { bundle: 'squidwest-layout-controls'});

	const [setupTeam, setSetupTeam] = useState([""]);
	const [commentaryTeam, setCommentaryTeam] = useState([""]);
	const [techTeam, setTechTeam] = useState([""]);
	const [staffTeam, setStaffTeam] = useState([""]);
	const [headTO, setHeadTO] = useState([""]);
	const [poolCaptains, setPoolCaptains] = useState([""]);
	const [artTeam, setArtTeam] = useState([""]);

	useEffect(() => {
		if(!eventData) return;

		setCurrentEvent(eventData.currentEvent);
		setNextEvent(eventData.nextEvent);
	}, [eventData]);

    useEffect(() => {
		if(!creditsData) return;
   
		setSetupTeam(creditsData.setupTeam);
		setCommentaryTeam(creditsData.commentaryTeam);
		setTechTeam(creditsData.techTeam);
		setStaffTeam(creditsData.staffTeam);
		setHeadTO(creditsData.headTO);
		setPoolCaptains(creditsData.poolCaptains);
		setArtTeam(creditsData.artTeam);
	}, [creditsData]);

	return (
        <StyledCredits>
            <Content>
                <CarouselComponent speed={10000} transitionSpeed={3000} once={true}>
                    <CreditsRow>
                        <TitleText>{currentEvent.name} {currentEvent.number > 0 ? '#' + currentEvent.number  : ''}</TitleText>
                    </CreditsRow>
                    {setupTeam.length > 0 && (<CreditsRow>
                        <CreditsNameRow title="Setup and Teardown Volunteers" names={setupTeam} />
                    </CreditsRow>)}
                    {commentaryTeam.length > 0 && (<CreditsRow>
                        <CreditsNameRow title="Commentary" names={commentaryTeam} />
                    </CreditsRow>)}
                    {techTeam.length > 0 && (<CreditsRow>
                        <CreditsNameRow title="Stream Technicians" names={techTeam} />
                    </CreditsRow>)}
                    {artTeam.length > 0 && (<CreditsRow>
                        <CreditsNameRow title="Artists" names={artTeam} />
                    </CreditsRow>)}
                    {staffTeam.length > 0 && (<CreditsRow>
                        <LogoRow>
                            <HeaderText>SquidWest TOs and Staff</HeaderText>
                            <img src="/bundles/twinsquiddies-layouts/images/SW_Logo_Red_bg.png" />
                        </LogoRow>
                        {
                            staffTeam.map((name, index) => {
                                return (
                                    <NameText key={index}>{name}</NameText>
                                )
                            })
                        }
                    </CreditsRow>)}
                    <CreditsRow>
                        <EventLogo src="/bundles/twinsquiddies-layouts/images/TwinSquiddiesLogo.png" />
                        <CreditsColumns>
                            <Rows>
                                <CreditsNameRow title="Head TO" names={headTO} />
                            </Rows>
                            <Rows>
                                <CreditsNameRow title="Staff and Pool Captains" names={poolCaptains} />
                            </Rows>
                        </CreditsColumns>
                    </CreditsRow>
                    <CreditsRow>
                        <EventLogo src="/bundles/twinsquiddies-layouts/images/TwinSquiddiesLogo.png" />
                        <CreditsNameRow title="Production" names={["MissPixiSix", "iMADgamerII", "Lilalychi", "Bits", "EpicYoshiMaster"]} />
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Stream Overlays and Design</HeaderText>
                        <NameText>EpicYoshiMaster</NameText>
                        <Divider />
                        <NameText>Need stream overlays for your event?</NameText>
                        <NameText>Contact me!</NameText>
                        <YoshiRow>
                            <DiscordLogo />
                            <NameText>@epicyoshimaster</NameText>
                        </YoshiRow>
                        <YoshiRow>
                            <TwitterLogo />
                            <NameText>@EpicYoshiMaster</NameText>
                        </YoshiRow>
                        <YoshiRow>
                            <GithubLogo />
                            <NameText>EpicYoshiMaster</NameText>
                        </YoshiRow>
                        <YoshiRow>
                            <Butterfly />
                            <NameText>@epicyoshimaster.bsky.social</NameText>
                        </YoshiRow>
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Special Thanks</HeaderText>
                    </CreditsRow>
                    <CreditsRow>
                        <LogoRow>
                            <HeaderText>Left Click Lounge</HeaderText>
                            <img src="/bundles/twinsquiddies-layouts/images/LeftClickLoungeLogo.png" />
                        </LogoRow>
                        <NameText>Venue, equipment, and support</NameText>
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Event Participants</HeaderText>
                        <NameText>These events aren't possible without you</NameText>
                    </CreditsRow>
                    <CreditsRow>
                        <HeaderText>Stream Viewers</HeaderText>
                        <NameText>We hope you enjoyed</NameText>
                    </CreditsRow>
                    <CreditsRow>
                        <TitleText>{nextEvent.name} {nextEvent.number > 0 ? '#' + nextEvent.number  : ''}</TitleText>
                        <NameText>{nextEvent.location}</NameText>
                        <NameText>{nextEvent.date}</NameText>
                        <NameText>See you there!</NameText>
                    </CreditsRow>
                </CarouselComponent>
            </Content>
        </StyledCredits>
    )
}

const StyledCredits = styled.div`
    position: relative;

    width: 1920px;
    height: 1080px;
`;

const Content = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    color: var(--credits-text);
    background-color: var(--credits-bg);

    overflow: hidden;
`;

const TitleText = styled.div`
    font-weight: bolder;
    font-size: 7rem;
`;

const HeaderText = styled.div`
    font-weight: bolder;
    font-size: 6rem;
`;

const NameText = styled.div`
    font-weight: normal;
    font-size: 3.5rem;
`;

const CreditsRow = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CreditsColumns = styled.div`
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
`;

const Rows = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LogoRow = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & img {
        margin-left: 20px;
        margin-bottom: 20px;
        height: 12.5rem;
    }
`;

const EventLogo = styled.img`
    height: 35rem;
`;

const YoshiRow = styled(LogoRow)`
    
    svg {
    width: 1em;
    object-fit: contain;
    margin-right: 20px;
    font-size: 50px;
   } 
`;

const Divider = styled.div`
    width: 100%;
    height: 10%;
`;

const root = createRoot(document.getElementById('root')!);
root.render(<Credits />);