import React from 'react'
import styled from 'styled-components'

interface NameRowProps {
    title: string;
    names: string[];
}

export const CreditsNameRow: React.FC<NameRowProps> = ({ title, names }) => {
    return (
        <Row>
            <HeaderText>{title}</HeaderText>
            {
            names.map((item, index) => {
                return <NameText key={index}>{item}</NameText>
            })
            }
        </Row>
    );
};

const Row = styled.div`
    display: contents;
`;

const HeaderText = styled.div`
    font-weight: bolder;
    font-size: 6rem;
`;

const NameText = styled.div`
    font-weight: normal;
    font-size: 3.5rem;
`;