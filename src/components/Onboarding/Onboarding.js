import React from "react";
import { Container, LogoContainer, BrandName } from "./OnboardingStyles";
import OnboardingStep from "./OnboardinStep";
import { EdenLogo } from "../../assests/svgs";
import { ONBOARDING_STEPS } from "../../assests/consts";
import OnboardingStep1 from "./OnboardingStep1";
import OnboardingStep2 from "./OnboardingStep2";
import OnboardingStep3 from "./OnboardingStep3";
import OnboardingStep4 from "./OnboardingStep4";

const Logo = () => {
    return (
        <LogoContainer>
            <EdenLogo />
            <BrandName>Eden</BrandName>
        </LogoContainer>
    )
}

const OB_DATA_DEFAULTS = {
    fullName : "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    usageType: 1,
}

const STEPID_COMPONENT_MAP = {
    [ONBOARDING_STEPS[0].stepId] : (props) => <OnboardingStep1 {...props}/>,
    [ONBOARDING_STEPS[1].stepId] : (props) => <OnboardingStep2 {...props}/>,
    [ONBOARDING_STEPS[2].stepId] : (props) => <OnboardingStep3 {...props}/>,
    [ONBOARDING_STEPS[3].stepId] : (props) => <OnboardingStep4 {...props}/>
}
const Onboarding = (props) => {
    const [onboardingStep, setOnboardingStep] = React.useState(ONBOARDING_STEPS[0].stepId);
    const [onboardingData, setOnboardingData] = React.useState(OB_DATA_DEFAULTS);
    return (
        <Container>
            <Logo />
            <OnboardingStep
                currentStep={onboardingStep}
                setOnboardingStep={setOnboardingStep}
            />
            {STEPID_COMPONENT_MAP[onboardingStep]({
                setOnboardingStep,
                setOnboardingData
            })}
        </Container>
    )
}
export default Onboarding;
