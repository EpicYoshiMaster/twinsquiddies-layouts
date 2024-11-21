import React from "react";
import styled from "styled-components";

type Outline = {
	width: string;
	color: string;
}

interface OutlinedTextProps {
	text: string;
	outlines: Outline[];
}

export const OutlinedText: React.FC<OutlinedTextProps> = ({ text, outlines }) => {
	return (
	<Wrapper>
		{outlines.map((item, index) => {
			return (
				<TextOutline $width={item.width} $color={item.color} key={index}>{text}</TextOutline>
			)	
		})
		}
		<Text>{text}</Text>
	</Wrapper>
	);
}

const Wrapper = styled.div`
	position: relative;	
`;

const Text = styled.div`
	position: relative;	
`;

const TextOutline = styled.div<{ $width: string, $color: string }>`
	position: absolute;
	width: 100%;
	left: 0;
	-webkit-text-stroke: ${({ $width }) => $width} ${({ $color }) => $color};
`;