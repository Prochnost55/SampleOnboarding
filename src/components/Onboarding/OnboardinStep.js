import React from "react";
import * as Styles from "./OnboardingStyles";
import { ONBOARDING_STEPS } from "../../assests/consts";

const ProgressBar = (props) => {
    let covers = {
        1 : "75px",
        2 : "175px",
        3 : "275px",
        4 : "350px"
    };

    return (
        <Styles.ProgressBarOuter>
            <Styles.ProgressBarInner cover={covers[props.currentStep]}>
            </Styles.ProgressBarInner>
        </Styles.ProgressBarOuter>
    )
}
const OnboardingStep = (props) => {
    return (
        <Styles.StepsContainer>

            {ONBOARDING_STEPS.map((each) => {
                return(
                    <Styles.Step 
                        key={'onboarding-step-' + each.stepId}
                        hasPassed = {props.currentStep >= each.stepId}
                        onClick={() => props.setOnboardingStep(each.stepId)}
                    >
                        {each.stepId}
                    </Styles.Step>
                )
            })}
            <ProgressBar currentStep={props.currentStep}/>
        </Styles.StepsContainer>
    )
}
export default OnboardingStep;
