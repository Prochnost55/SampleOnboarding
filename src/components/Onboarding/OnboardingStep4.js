import React from "react";
import * as Styles from "./OnboardingStyles";
import Button from "../Button/Button";
import { Tick } from "../../assests/svgs";
const Success = () => {
    return (
        <Styles.SuccessIcon>
            <Styles.TickWrapper>
                <Tick />
            </Styles.TickWrapper>
        </Styles.SuccessIcon>
    )
}
const OnboardingStep1 = (props) => {
    return (
        <Styles.BodyContainer>
            <Success />
            <Styles.Heading>Congratulations, Eren!</Styles.Heading>
            <Styles.SubHeading>You have completed onboarding, you can start using Eden</Styles.SubHeading>
            
            <Button onClick={() => props.setOnboardingStep(4)}>
                Launch Eden
            </Button>
        </Styles.BodyContainer>
    )
}
export default OnboardingStep1;
