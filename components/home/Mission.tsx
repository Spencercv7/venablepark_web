import styled from "styled-components";
import media from "../../utils/MediaQueries";

import { H2 } from "../../styles/typography";
import { CONTENTWRAPPER } from "../../styles/contentWrapper";
import MissionTile from "./MissionTile";
import { LINEBREAK } from "../../styles/Linebreak";

const MISSIONWRAPPER = styled(CONTENTWRAPPER)`
    height: 100%;
    width: 100%;

    display: grid;
    grid-auto-rows: auto;
    gap: 10rem;
    padding-inline: 10%;

    ${media.width_800`
        gap: 5rem;
    `}
`;

const MISSIONSTATMENT = styled.p`
    font-size: ${(props) => props.theme.fontSize.h3};
    color: ${(props) => props.theme.colors.primary};
    justify-self: center;
    text-align: center;
    padding-block: min(10%, 10rem);
`;

const MISSIONCONTENT = styled.div`
    display: grid;
    gap: 5rem;
    width: 100%;
    & p {
        font-size: ${(props) => props.theme.fontSize.p};
        justify-self: center;
        padding-inline: 5vw;
        text-align: center;
    }
`;

type Props = {};

const Mission: React.FC<Props> = () => {
    return (
        <MISSIONWRAPPER>
            <MISSIONSTATMENT>
                Absolute return strategies that outperform
                <br />
                with a fraction of the risk.
            </MISSIONSTATMENT>
            <LINEBREAK />
            <MISSIONCONTENT>
                <H2>Our Mission</H2>
                <p>
                    It is our experience that in order to render truly unbiased,
                    client focused advice, your advisor needs to be a fiduciary.
                    They should be paid one all inclusive annual fee, which is
                    visible and fair. They should not be the recipient of
                    commissions or any other indirect financial incentives. They
                    should not be accountable to &quot;sales targets&quot;, they should
                    not be selling you any particular &quot;products&quot;. They must work
                    exclusively under the agenda of the individual client whose
                    trust they have been granted. They must be accountable to
                    their clients alone. Your advisor must be independent,
                    trustworthy and held to the highest ethical standards.
                </p>
            </MISSIONCONTENT>
            <LINEBREAK />
        </MISSIONWRAPPER>
    );
};

export default Mission;
