import React from 'react';
import styled from 'styled-components'
import { createRoot } from 'react-dom/client';
import { Omnibar } from './components/Omnibar';
import { Background } from './components/Background';

export function Intermission() {

	return (
		<StyledIntermission>
			<Background />
			<Content>
				<TopRow>
					<LargeFeed />
					<LargeFeed />
				</TopRow>
				<MiddleRow>
					<SmallFeed />
				</MiddleRow>
				<Omnibar />
			</Content>
		</StyledIntermission>
	);
}

const StyledIntermission = styled.div`
	position: relative;
	width: 1920px;
	height: 1080px;
`;

const Content = styled.div`
	position: relative;
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
`;

const TopRow = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	margin: 0;
	padding: 20px 40px 5px;

	box-sizing: border-box;
`;

const MiddleRow = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding: 5px 20px;
`;

const LargeFeed = styled.div`
	height: 500px;
	aspect-ratio: 16/9;
	box-sizing: content-box;

	border: 8px solid var(--feed-large-border);
	background-color: var(--feed-large-color);
`;

const SmallFeed = styled.div`
	height: 360px;
	aspect-ratio: 16/9;
	box-sizing: content-box;

	border: 8px solid var(--feed-small-border);
	background-color: var(--feed-small-color);
`;

const root = createRoot(document.getElementById('root')!);
root.render(<Intermission />);