import styled, {css} from "styled-components";

const flex = css`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`
    margin: 0 auto;
    width: 700px;
    @media (max-width: 560px) {
        margin: 0 16px;
        width: 100%;
    }
`;

export const LogoContainer = styled.div`
    ${flex}
    margin: 20px 0;
    & svg {
        height: 40px;
        width: 40px;
        margin-right: 5px;
        & path {
            fill: ${props => props.theme.primary};
        }
    }
`;

export const BrandName = styled.h1`
    font-size: ${props => props.theme.fontSize.h1};
    font-weight: 500;
`;


export const StepsContainer = styled.div`
    ${flex}
    width: 350px;
    margin: 30px auto;
    justify-content: space-between;
    position: relative;
`;

export const Step = styled.div`
    ${flex}
    border: 1px solid ${props => props.theme.light};
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background: white;
    z-index: 1;
    transition: all .3s cubic-bezier(.1,.56,.45,.990);
    ${props => props.hasPassed && css`
        background: ${props => props.theme.primary};
        color: white;
        border: 1px solid ${props => props.theme.primary};
    `}
`;
const progressBarCommons = css`
    position: absolute;
    content: " ";
    width: 100%;
    height: 1px;
`;
export const ProgressBarOuter = styled.div`
    ${progressBarCommons};
    background: ${props => props.theme.light};
`;
export const ProgressBarInner = styled.div`
    ${progressBarCommons};
    background: ${props => props.theme.primary};
    width: ${props => props.cover};
    transition: all .3s cubic-bezier(.1,.56,.45,.990);
`;


export const BodyContainer = styled.div`
    ${flex}
    flex-direction: column;
`;

export const Heading = styled.div`
    font-size: ${props => props.theme.fontSize.h1};
    font-weight: 500;
    margin: 20px 0;
    @media (max-width: 560px) {
        text-align: center;
        max-width: 350px;
    }
`;
export const SubHeading = styled.div`
    font-size: ${props => props.theme.fontSize.h5};
    font-weight: 300;
    color: ${props => props.theme.textSecondary};
    margin-bottom: 20px;
    @media (max-width: 560px) {
        text-align: center;
        max-width: 350px;
    }
`;

export const CardContainer = styled.div`
    ${flex}
    width: 380px;
    padding: 5px;
`
export const Card = styled.div`
    border: 1px solid ${props => props.theme.light};
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: all .3s cubic-bezier(.1,.56,.45,.990);
    & svg {
        height: 40px;
        width: 40px;
        margin-left: -5px;
        & path{
            transition: all .3s cubic-bezier(.1,.56,.45,.990);
        }
    }
    ${props => props.isSelected ? css`
        {
            border: 1px solid ${props => props.theme.primary};
            & svg path {
                fill: ${props => props.theme.primary};
            }
        }
    `: css`
        :hover {
            // todo 
            border: 1px solid ${props => props.theme.secondary};
            & svg path {
                fill: ${props => props.theme.secondary};
            }
        }
    `}

`
export const CardHeading = styled.div`
    font-size: ${props => props.theme.fontSize.h5};
    font-weight: 500;
    margin-bottom: 10px;
`
export const CardBody = styled.div`
    font-size: ${props => props.theme.fontSize.p1};
    font-weight: 300;
    color: ${props => props.theme.textSecondary};
    line-height: 1.3;
`
export const SuccessIcon = styled.div`
    margin: 25px auto 10px;
    & svg {
        height: 15px;
        width: 15px;
        transform: rotate(10deg);
        & path {
            fill: #fff;
        }
    }
`
export const TickWrapper = styled.div`
    ${flex}
    background: ${props => props.theme.primary};
    border-radius: 50px;
    height: 60px;
    width: 60px;

`
